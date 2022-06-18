import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function LoadingProgress({ handleLoading }: { handleLoading: (state: boolean) => void }) {
  const [elLoading, setElLoading] = useState(document.createElement('div'));
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const elModalLoading = document.getElementById('loading') as Element;
    elLoading.id = 'modal';
    elModalLoading.appendChild(elLoading);
    // (async () => {
    //   const response = await fetch(
    //     'https://fetch-progress.anthum.com/30kbps/images/sunrise-baseline.jpg'
    //   );
    //   const contentLength = response.headers.get('content-length') || '';
    //   const total = parseInt(contentLength, 10);
    //   let loaded = 0;
    //   const res = new Response(
    //     new ReadableStream({
    //       async start(controller) {
    //         const reader = response.body?.getReader();
    //         for (;;) {
    //           const { done, value } = (await reader?.read()) || {
    //             done: '',
    //             value: new ArrayBuffer(8),
    //           };
    //           if (done) break;
    //           loaded += value?.byteLength;
    //           setPercent(Math.round((loaded / total) * 100));
    //           controller.enqueue(value);
    //         }
    //         handleLoading(false);
    //         controller.close();
    //       },
    //     })
    //   );
    // })();

    return () => void elModalLoading.removeChild(elLoading);
  }, []);

  // <div className="spinner h-full bg-slate-600 opacity-75"></div>,
  return createPortal(
    <>
      <div
        className={`fixed top-0 bg-gradient-to-r from-[#00DBDE] to-[#FC00FF] h-[3px] transition-all duration-250`}
        style={{ width: `${percent}%` }}
      ></div>
      <div className="spinner h-full bg-[#6b809673]"></div>
    </>,
    elLoading
  );
}

export default LoadingProgress;
