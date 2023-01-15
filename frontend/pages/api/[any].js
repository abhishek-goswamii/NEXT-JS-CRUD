import {useRouter} from 'next/router'

const any = () => {

    const router = useRouter()
    const v = router.query.any

  return (
    <div>hey h{v}</div>
  )
}

export default any