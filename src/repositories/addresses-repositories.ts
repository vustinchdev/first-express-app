const addresses = [{id: '1', value: 'Selitskogo'}, {id: '2', value: 'Varvasheni'}]

export const adressesRepository = {
    getAddresses() {
        return addresses
    },
    getAddressById(id: string) {
        const address = addresses.find(a => a.id === id)
        return address
    }
}