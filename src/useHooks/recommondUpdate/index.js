const useProcessArticalList = (articalList = []) => {
  const newList = []
  articalList.forEach((item) => {
    newList.push({
      ...item,
      classification: item.classification.split(' '),
      url: '/post/' + item.id
    })
  })
  return newList
}

export default useProcessArticalList