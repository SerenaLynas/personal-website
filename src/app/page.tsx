import { BookTextIcon, CircleUserIcon, CodeXmlIcon, CpuIcon, FileCode2Icon, GraduationCapIcon, HammerIcon, MonitorCogIcon, NotebookPenIcon, PcCaseIcon } from 'lucide-react';
import { ExternalLink } from './external-link';
import { TypeCard, TypeCardContainer } from './type-card';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col sm:flex-row'>
      <div className='flex-0 sm:flex-1 bg-gray-100 p-5 relative overflow-hidden'>
        <img className='absolute bottom-0 left-0 right-0 w-dvw h-dvh opacity-25' src='./sirin-bg.svg'/>
        <h1 className='text-2xl font-extrabold'>Serena Lynas</h1>
        <div className='flex flex-col gap-2 pt-5'>
          <ExternalLink icon='github-mark.svg' left='GitHub' right='@SerenaLynas' href='https://github.com/SerenaLynas/'/>
          <ExternalLink icon='quam-serena.svg' left='Blog' right='quamserena.com' href='https://quamserena.com'/>
          <ExternalLink icon='github-mark.svg' left='Sirin flight computer' right='GitHub repo' href='https://github.com/Nautki/sirin'/>
        </div>
      </div>
      <div className='p-5 gap-5 flex flex-col flex-2 bg-white h-dvh overflow-auto'>
        <TypeCardContainer>
          <TypeCard title='whoami'>
            I am Serena Lynas, a student at Case Western Reserve University, and I am hoping to start a career in
            software engineering after graduation in May of 2026. I have a broad educational background in computer
            science and physics and applied experience in hardware and software for embedded systems — see some of my
            work below!
          </TypeCard>
          <TypeCard title='cd ../case-rocket-team'>
            <img className='h-[150px] sm:h-[300px] bg-cover bg-center rounded-lg shadow-lg float-right' src='./sirin.png'/>
            As the avionics lead of Case Rocket Team, I designed, routed, and programmed a flight computer named Sirin and I
            had it produced through JLCPCB. The board features an STM32H7 processor and various instruments, including
            a LoRa radio, GPS, and barometer. The rest of the avionics subteam and I wrote the code in both Rust and C
            (using FFI).
            <ul className='list-disc list-inside pl-4 my-2'>
              <li><strong><BookTextIcon className='inline'/> Languages & Libraries: </strong> Rust, C, Embassy-rs, CMSIS-DSP</li>
              <li><strong><CpuIcon className='inline'/> Hardware & Protocols: </strong> STM32H7, LoRa, USB, SPI</li>
              <li><strong><CircleUserIcon className='inline'/> My role: </strong> software (both robot control and React frontend)</li>
            </ul>
            After flying the
            computer on our rocket at the International Rocket Engineering Competition last summer, we are currently
            working on a revised version for next year's competition, with new features, including sensor fusion through
            a Kalman filter.
            <div className='max-w-xs py-3'>
              <ExternalLink icon='github-mark.svg' left='Sirin' right='GitHub repo' href='https://github.com/Nautki/sirin'/>
            </div>
          </TypeCard>
          <TypeCard title='cd los-alamos'>
            In a 10-week internship at Los Alamos National Laboratory, I worked in a small team with a mechanical
            engineering student and a controls student to build a robot to mix polymer-bound high explosives.
            <ul className='list-disc list-inside pl-4 my-2'>
              <li><strong><BookTextIcon className='inline'/> Languages & Libraries: </strong> Rust, TypeScript/JavaScript, React, Linux</li>
              <li><strong><CpuIcon className='inline'/> Hardware: </strong> UR16e Collaborative Robot, Raspberry Pi</li>
              <li><strong><CircleUserIcon className='inline'/> My role: </strong> software (both robot control and React frontend)</li>
            </ul>
            I developed the robot control logic in Rust and built a React web interface for control and monitoring, and then
            interfaced the two using WebSockets and a REST API. The final prototype supported custom, user-defined mixing
            recipes via the frontend. The clients were highly impressed with the functionality and polish of the system, and
            expressed interest in further development with the Department of Energy.
          </TypeCard>
          <TypeCard title='neofetch'>
            Here's what I like to use:
            <ul className='list-disc list-inside pl-4'>
              <li><strong><MonitorCogIcon className='inline'/> OS:</strong> Linux Mint and Ubuntu</li>
              <li><strong><FileCode2Icon className='inline'/> Languages:</strong> Rust, C/C++, JavaScript/TypeScript, Python, Java, LaTeX</li>
              <li><strong><BookTextIcon className='inline'/> Libraries:</strong> React, SolidJS, Embassy-rs</li>
              <li><strong><HammerIcon className='inline'/> Tools:</strong> Git, KiCad, VSCode</li>
            </ul>
          </TypeCard>
          <TypeCard title='cat education.txt'>
            I'm a double major, expecting to finish both in May 2026:
            <ul className='list-disc list-inside pl-4'>
              <li><GraduationCapIcon className='inline'/> Computer Science, BS</li>
              <li><GraduationCapIcon className='inline'/> Mathematics and Physics, BS</li>
            </ul>
          </TypeCard>
          <TypeCard title='' />
        </TypeCardContainer>
        <div className='h-32 shrink-0' />
      </div>
    </main>
  );
}
