interface CategroyModuleProps {
  title: string,
  description: string
}

export default function CategoryModule({title, description}: CategroyModuleProps) {
  return (
    <div className="max-w-[400px]">
      <div className="poppins-font text-2xl font-semibold">{title}</div>
      <div className="inter-font">{description}</div>
    </div>
  )
}
