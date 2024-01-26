console.log('Vue OK', Vue);

const app = Vue.createApp ({
    data() {
        return {
            user,
            contacts,
            currentId: 1
        };
    },
    methods: {
        currentContact() {
            contacts.forEach((contact) => {
                if (contact.id === currentId) {
                    return contact.id
                }
            });
        }     
    }
});
app.mount('#root');



