
export type Address = {
    id: string,
    name: string,
    address: string
}

export const Addresses: Address[] = [
    { id: "HQ", address: "Herrengasse 3, A-8010 Graz", name: "Herrengasse" },
    { id: "FK", address: "Triester Straße 210, A-8073 Feldkirchen bei Graz", name: "Feldkirchen" },
    { id: "MUC", address: "Maximilianstr. 35a, D - 80359 München", name: "München" }
]

export const getAddress = (key: string) =>
    Addresses.find(addr => addr.id === key)
