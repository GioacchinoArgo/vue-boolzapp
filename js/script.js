    console.log('Vue OK', Vue);

    const app = Vue.createApp ({
        data() {
            return {
                user,
                contacts,
                currentId: 1
            };
        },
        computed: {
            currentContact() {
                return this.contacts.find(contact => contact.id === this.currentId);
            },
            currentChat() {
                return this.currentContact.messages;
            }
        },
        methods: {
            setCurrentId(id) {
                this.currentId = id
            }
        }
    });
    app.mount('#root');



