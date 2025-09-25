import { ArrowUpRight } from 'lucide-react'

export function ExternalLink(props: {
  href: string,
  left: React.ReactNode,
  right: React.ReactNode,
  icon: string | React.ReactNode
}) {
  return (
    <a className='flex gap-2 items-center px-3 py-2.5 transition bg-white rounded-lg shadow-lg shadow-ctp-crust _inset-shadow-[0_-20px_15px] inset-shadow-ctp-mauve-50/10 scale-100 hover:scale-101' href={props.href}>
      {typeof props.icon == 'string' ? <img className='w-[24px] h-[24px]' src={props.icon}/> : props.icon}
      <div className='flex-1 font-medium'>
        {props.left}
      </div>
      <div className='text-ctp-mauve-900'>
        {props.right}
      </div>
      <ArrowUpRight className='text-ctp-mauve-900' strokeWidth={3} />
    </a>
  )
}