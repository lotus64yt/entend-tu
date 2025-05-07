export function Article(
    {
        title,
        content,
        className,
        ...props
    }: {
        title: string;
        content: string;
        className?: string;
    }
) {
    return (
        <article className={`flex flex-col gap-4 items-center justify-center bg-zinc-800 p-8 rounded-lg shadow-lg ${className}`} {...props}>
          <h2 className="text-2xl font-bold text-center">
            {title}
          </h2>
          <p className="text-zinc-300 text-center">
            {content}
          </p>
        </article>
    )
}