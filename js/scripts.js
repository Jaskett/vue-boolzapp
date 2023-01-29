const { createApp } = Vue

createApp({
    data() {
        return {
            isSent: '',
            lastMessageDate: '27/01/23',
            lastMessageTime: '12:00',
            activeChatIndex: 0,
            activeChatIndexImg: this.activeChatIndex +  1,
            newMessage:'',
            txtInput: '',
            searchInput: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    messages: [
                        {
                            date: '20/03/2020',
                            hour: '16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020',
                            hour: '16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020',
                            hour: '16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    messages: [
                        {
                            date: '28/03/2020',
                            hour: '10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020',
                            hour: '10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020',
                            hour: '16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]                
        }
    },
    mounted() {
        let listContact = document.querySelectorAll('li');
        listContact[this.activeChatIndex].classList.add('selected-contact');
    },
    computed: {
        filterContact() {
            let listContact = document.querySelectorAll('li');
            let str = this.searchInput.trim();
            if(str !== '') {
                for(let i = 0; i < this.contacts.length; i++) {
                    if(!this.contacts[i].name.includes(str)) {
                        listContact[i].classList.add('d-none');
                        console.log(`L'input di ricerca è ${str}`);
                        console.log('contatto i =' + ' ' + listContact[i]);
                        console.log(` La stringa ${str} NON è contenuta in ${this.contacts[i].name}`);
                    } else {
                        console.log(` La stringa ${str} è contenuta in ${this.contacts[i].name}`);
                    }
                }
            } else if(str == '') {
                for (let x = 0; x < this.contacts.length; x++) {
                    listContact[x].classList.remove('d-none');
                }
            }
            return str;
        }
    },
    methods: {
        moveActive(index) {
            let listContact = document.querySelectorAll('li');
            listContact[this.activeChatIndex].classList.remove('selected-contact');
            this.activeChatIndex = index;
            listContact[this.activeChatIndex].classList.add('selected-contact');
            console.log(`Il contatto attivo è: ${this.activeChatIndex}`);
        },
        hide() {
            document.getElementById('notification-alert-section').classList.add('d-none');
        },
        findStatus() {
            for(let i = 0; i < this.contacts.length; i++) {
                let msg = this.contacts[i].messages;
                for (let x = 0; x < msg.length ; x++) {
                    if (msg[x].status == 'send') {
                        this.isSent = true;
                    } else {
                        this.isSent = false;
                    }
                }
            }
        },
        pushMessage() {
            let msg = this.txtInput;
            let newM = {
                date: '?',
                hour: this.lastMessageTime,
                message: msg,
                status: 'sent'
            }
            this.txtInput = '';
            this.contacts[this.activeChatIndex].messages.push(newM);
            setTimeout(this.pushMessageResp, 1000);
        },
        pushMessageResp() {
            let newR = {
                date: this.lastMessageDate,
                hour: this.lastMessageTime,
                message: 'Ok',
                status: 'received'
            }
            this.contacts[this.activeChatIndex].messages.push(newR);
        },
    }
}).mount('#container-app');