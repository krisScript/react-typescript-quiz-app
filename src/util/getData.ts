const getData = async (url:string) : Promise<any> => {
    const response = await fetch(url)
    const responseData = await response.json()
    return responseData
}
export default getData