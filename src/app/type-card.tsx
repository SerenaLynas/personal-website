'use client';

import { Context, createContext, PropsWithChildren, useContext, useEffect, useLayoutEffect, useRef } from 'react';

const TypeCardCtx: Context<{
  render: ((isLast: boolean) => Promise<void>)[]
}> = createContext({
  render: []
} as any);

export function TypeCardContainer(props: PropsWithChildren<{}>) {
  const render = useRef([]);
  useEffect(() => {
    (async () => {
      console.log('Container');
      for (const [i, fn] of render.current.entries()) {
        await (fn as any)(i == render.current.length - 1);
      }
    })(); 
  }, []);

  return (
    <TypeCardCtx.Provider value={{
      render: render.current
    }}>
      {props.children}
    </TypeCardCtx.Provider>
  )
}

export function TypeCard(props: PropsWithChildren<{
  title: string
}>) {
  const ctx = useContext(TypeCardCtx);

  useEffect(() => {
    ctx.render.push(isLast => new Promise(res => {
      let counter = 0;

      let interval = setInterval(() => {
        counter++;
        const chars = Math.max(counter - 10, 0);

        let str = props.title.substring(0, chars) + '█';

        coderef!.current!.innerText = str;

        if (chars >= props.title.length + 5) {
          contentref!.current.style.visibility = 'visible';

          clearInterval(interval);
          coderef!.current!.innerText = props.title + (isLast ? '█' : '');
          res();

          if (isLast) {
            let counter = 0;
            setInterval(() => {
              counter++;

              let text = props.title + (counter % 2 == 0 ? '█' : '');

              if (text.length == 0) {
                coderef!.current!.style.visibility = 'hidden';
                coderef!.current!.innerText = '█';
              } else {
                coderef!.current!.style.visibility = 'visible';
                coderef!.current!.innerText = text;
              }
            }, 800);
          }
        }
      }, 50)
    }))
  }, [])

  const coderef: any = useRef(null);
  const contentref: any = useRef(null);

  return <div>
    <code className='text-ctp-mauve-950' ref={coderef}/>
    <div className='invisible text-gray-800 pl-5' ref={contentref}>
      {props.children}
    </div>
  </div>
}