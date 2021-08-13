module.exports = class MessageDto {
    user
    text
    date

    constructor(model) {
        this.user = model.user
        this.text = model.text
        this.date = model.date
    }
}