import { useSearchUsersQuery } from "../store/github/github.api"

export function HomePage() {

    const {isLoading, isError, data} = useSearchUsersQuery('Vladilen')

    console.log(data)

    return (
        <div>home</div>
    )
}