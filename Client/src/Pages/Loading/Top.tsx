import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function LoadingTop() {
  const [elLoading, setElLoading] = useState(document.createElement('div'));
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const elModalLoading = document.getElementById('loading') as Element;
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
    //           console.log(loaded, total);
    //           controller.enqueue(value);
    //         }
    //         controller.close();
    //       },
    //     })
    //   );
    // })();

    return () => void elModalLoading.removeChild(elLoading);
  }, []);
  return createPortal(
    <div
      className={`bg-gradient-to-r from-[#00DBDE] to-[#FC00FF] h-[3px] transition-all duration-500`}
      style={{ width: `${percent}%` }}
    ></div>,
    elLoading
  );
}

export default LoadingTop;
