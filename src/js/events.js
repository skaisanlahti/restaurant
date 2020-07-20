export const events = {
    events: {},
    addListener: function(eventName, listener){
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(listener);
    },
    removeListener: function(eventName, listener){
        if (this.events[eventName]){
            for (let i = 0; i < this.events[eventName].length; i++){
                if (this.events[eventName][i] === listener){
                    this.events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    },
    trigger: function(eventName, data){
        if (this.events[eventName]){
            this.events[eventName].forEach(function(listener){
                listener(data);
            });
        }
    }
}