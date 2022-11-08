import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-JacksPhotography`;
    }, [title])
};

export default useTitle;