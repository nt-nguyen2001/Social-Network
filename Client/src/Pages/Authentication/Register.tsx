import { FormEvent, useState } from 'react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { registerAPI } from '../../Api/Authentication.api';
import { mailRegister } from '../../Api/Mail.api';
import { getUser } from '../../Api/User.api';
import useDarkMode from '../../Hooks/useDarkMode';
import useFormValidation from '../../Hooks/useFormValidation';
import { FetchResponse, Input, User } from '../../Models';
import { config } from '../../Utils/toast.config';
import Bottom from './Bottom';
import Header from './Header';

const inputArray: Input[] = [
  {
    type: 'text',
    placeholder: 'Enter email or user name',
    key: 'account',
  },
  {
    type: 'text',
    placeholder: 'Create User Name',
    key: 'userName',
  },
  {
    type: 'text',
    placeholder: 'Contact Number',
    key: 'phoneNumber',
  },
  {
    type: 'password',
    placeholder: 'Password',
    key: 'password',
  },
];
interface UserRegister extends User {
  otp: string;
}

function Register(): JSX.Element {
  const [themeMode, toggleDarkMode] = useDarkMode();
  const navigate = useNavigate();
  const [timeOutMail, setTimeOutMail] = useState(120);
  const { data, handleChange, handleValidate, errors, setErrors } = useFormValidation<UserRegister>(
    {
      validations: {
        account: {
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "That email address doesn't look right!",
          },
          required: {
            value: true,
            message: 'Choose a Gmail address',
          },
        },
        userName: {
          required: {
            value: true,
            message: 'Enter a user name',
          },
        },
        phoneNumber: {
          required: {
            value: true,
            message: 'Enter a phone number',
          },
          pattern: {
            value: /^\d*$/,
            message: 'Only number',
          },
          custom: {
            isValid(value) {
              return value.length === 11;
            },
            message: 'Password only has 11 digits',
          },
        },
        password: {
          required: {
            value: true,
            message: 'Enter a password',
          },
          custom: {
            isValid(value) {
              return value.length >= 6;
            },
            message: 'Password has at least 6 digits',
          },
        },
        otp: {
          required: {
            value: true,
            message: 'Enter a OTP',
          },
          custom: {
            isValid(value) {
              return value.length === 6;
            },
            message: 'OTP only has 6 digits',
          },
        },
      },
      initial: {
        userName: '',
        password: '',
        account: '',
        phoneNumber: '',
        otp: '',
      },
    }
  );

  const handleUserExists = (params: string = '') => {
    getUser<User>()
      .then((data) => {
        if (data?.payload && data.payload.length > 0) {
          setErrors({
            ...errors,
            account: 'User exists already!',
          });
        }
      })
      .catch((err) => {
        console.log('🚀 ~ file: Register.tsx ~ line 125 ~ .then ~ err', err);
      });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (handleValidate()() === true) {
      registerAPI(data).then((res) => {
        switch (res?.status) {
          case 200:
            navigate('/login', {
              state: {
                success: true,
              },
            });
            break;
          case 500:
            toast.error('Server error, try later!', config);
            break;
        }
      });
    }
  };
  const handleSendMail = (e: FormEvent) => {
    e.preventDefault();
    if (data.account) {
      mailRegister(data.account);
      setTimeOutMail((prev) => prev - 1);
      let timeOut = setInterval(() => {
        setTimeOutMail((prev) => {
          if (prev === 0) {
            clearInterval(timeOut);
            return 120;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  return (
    <section
      className={`pt-4 h-full overflow-hidden text-dark ${
        (themeMode.isTransition && 'transition duration-500') || ''
      }`}
    >
      <section className="font-Poppins mt-4 mb-14 mx-4 md:mx-8 xl:mx-44 lg:flex lg:h-screen ">
        <div className="flex justify-between gap-4">
          <div className="font-semibold text-lg ">Your Logo</div>
          <div>
            {(themeMode.darkMode && (
              <BsFillSunFill
                className="text-2xl cursor-pointer"
                onClick={toggleDarkMode}
                color="#e9c46a"
              />
            )) || (
              <BsMoonStarsFill
                className="text-xl cursor-pointer"
                onClick={toggleDarkMode}
                color="#e9c46a"
              />
            )}
          </div>
        </div>
        <section className="lg:flex lg:flex-row lg:items-center mt-10 gap-10 flex-1 ">
          <Header type="Login" path="/Login" />
          <form onSubmit={handleSubmit} className="flex-1">
            <div className="mb-11">
              <div className="text-3xl font-medium mb-7">Sign Up</div>
              <div className="flex flex-col gap-9 mb-4">
                {inputArray.map(
                  (value): JSX.Element => (
                    <div className="relative flex flex-col gap-2 " key={value.key}>
                      <input
                        {...value}
                        onChange={handleChange(value.key as keyof UserRegister, handleUserExists)}
                        onBlur={handleValidate(value.key as keyof UserRegister)}
                        className="input-form"
                      />
                      {errors[value.key as keyof UserRegister] && (
                        <p className="absolute -bottom-7 text-sm text-red-500">
                          {errors[value.key as keyof UserRegister]}
                        </p>
                      )}
                    </div>
                  )
                )}
                <div className="flex flex-col gap-2 relative">
                  <input
                    onChange={handleChange('otp')}
                    onBlur={handleValidate('otp')}
                    className="bg-[#F0EFFF] text-black focus:outline-none placeholder-[#A7A3FF] font-normal py-2 px-6 rounded-lg"
                    placeholder="OTP"
                  />
                  <button
                    onClick={handleSendMail}
                    className="absolute right-0 rounded-r-md w-1/4 bg-[#4D47C3] h-full flex items-center justify-center disabled:bg-[#A7A3FF]"
                    disabled={timeOutMail !== 120 && true}
                  >
                    {(timeOutMail === 120 && 'Send Mail') || timeOutMail}
                  </button>
                  {errors['otp'] && (
                    <p className="absolute -bottom-7 text-sm text-red-500">{errors['otp']}</p>
                  )}
                </div>
              </div>
              <div className="text-sm text-gray-500 text-right">Forgor password ?</div>
            </div>
            <button
              className={`btn-form ${
                (Object.keys(errors).length > 0 && 'cursor-not-allowed opacity-50') ||
                'cursor-pointer'
              }`}
              disabled={Object.keys(errors).length > 0 && true}
              onClick={handleSubmit}
            >
              Register
            </button>
            <Bottom />
          </form>
        </section>
      </section>
      <ToastContainer pauseOnFocusLoss={false} />
    </section>
  );
}

export default Register;
