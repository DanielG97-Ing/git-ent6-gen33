const getDaysFromDates = (date1, date2) => {

    const initialDate = new Date(date1)
    const finalDate = new Date(date2)

    const differenceMs = finalDate.getTime() - initialDate.getTime()
    const differenceDays = differenceMs / (1000 * 3600 * 24)

    return differenceDays + 1

}
export default getDaysFromDates