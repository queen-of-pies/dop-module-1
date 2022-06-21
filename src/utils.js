import moment from "moment"

export function formatDate() {
    return moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
}