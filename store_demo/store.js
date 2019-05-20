const store = {
    debug: true,
    state:{
        message: 'Hello vue.js!!'
    },
    setMessageAction(newValue) {
        this.debug && console.log(`setmessageAction triggred with ${newValue}`)
        this.state.message = newValue
    },
    clearMessageAction() {
        this.debug && console.log('clearMessageAction triggered')
        this.state.message = ''
    }
}