// buscar os links salvos.
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}
// salvaor no localstorage.
    export async function saveLink(key, newLink){
        let linksStored = await getLinksSave(key);

        // se já tiver um link salvo com mesmo ID eu não vou duplicar.
        const hasLink = linksStored.some( link => link.id === newLink.id)

        if(hasLink){
            console.log('ESSE LINK JÁ EXISTE NA SUA LISTA!')
            return;
        }
        // Adicionar esse novo link na lista.
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('LINK SALVO COM SUCESSO!')
    }

    


// deletar link salvo.
export function deleteLink(links, id){

    let myLinks = links.filter(item => {
        return (item.id !== id)
    })
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log('link deletado com sucesso')
    
    return myLinks
}