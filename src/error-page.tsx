import { useRouteError } from 'react-router-dom'

const ErrorPage: React.FC<{}> = () => {
  const error = useRouteError()! as { statusText: String; message: String }
  console.error(error)

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-slate-900 mb-5">Oops!</h1>
      <p className="mb-5">Sorry, an unexpected error has occurred.</p>
      <p className="italic text-slate-400">
        {error.statusText || error.message}
      </p>
    </div>
  )
}

export default ErrorPage
