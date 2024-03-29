exports.modifyingPayload = (obj) => {

    let newObj = {}

    Object.keys(obj).forEach(elem => {
        const value = obj[elem]
        newObj[elem] = (typeof value === 'string' && value?.includes('[')) ? JSON.parse(value) : value
    })

    return newObj
}