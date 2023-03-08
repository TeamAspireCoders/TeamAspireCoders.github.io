import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'

export async function loader({ params }: LoaderFunctionArgs) {
  const number = params.id
  return { number }
}

const Counter: React.FC<{}> = () => {
  const loaderData = useLoaderData() as { number: string }
  return <div>The number is: {loaderData.number}</div>
}

export default Counter
