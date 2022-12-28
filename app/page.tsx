import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className="grid pt-32 place-items-center">
        <div className="flex text-4xl">
          <input className="h-14 w-96 bg-neutral-900 outline rounded-lg" type="text" />
        </div>
      </div>
    </div>
  )
}
