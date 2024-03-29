    console.log('Vue OK', Vue);

    const app = Vue.createApp ({
        data() {
            return {
                user,
                contacts,
                currentId: 1,
                Message: '',
                searchText: ''
            }
        },
        computed: {
            currentContact() {
                return this.contacts.find(contact => contact.id === this.currentId);
            },
            currentChat() {
                return this.currentContact.messages;
            },
            filteredContact() {
                const searchTerm = this.searchText.toLowerCase();
                return this.contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm))
            }
        },
        methods: {
            setCurrentId(id) {
                this.currentId = id
            },
            sendMessage() {
                if(!this.Message) return;
                const newMessage = {
                    id: new Date().toISOString(),
                    date: new Date().toLocaleDateString(),
                    status: 'sent',
                    text: this.Message
                }
                this.currentChat.push(newMessage)
                this.Message = '';

                setTimeout(() => {
                const newMessage = {
                    id: new Date().toISOString(),
                    date: new Date().toLocaleDateString(),
                    status: 'received',
                    text: 'Ok'
                }
                this.currentChat.push(newMessage)
                }, 1000);
            }
        }
    });
    app.mount('#root');



