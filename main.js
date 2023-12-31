const { createApp } = Vue

createApp({
    data() {
        return {
            index: 0,
            nuovoMessaggio: "",
            findProfile: "",
            contacts: [

                {
                    name: 'michele',
                    avatar: 'avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'fabio',
                    avatar: 'avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'samuele',
                    avatar: 'avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'alessandro B.',
                    avatar: 'avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'alessandro L.',
                    avatar: 'avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'claudia',
                    avatar: 'avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'federico',
                    avatar: 'avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'davide',
                    avatar: 'avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },
    
    methods:{
        selectContact(i){

            console.log(i)
            this.contacts[i].messages.forEach(messaggio => {
                
                console.log(messaggio.message)
                
                this.index = (i)

            });
            

        },
        add(){
            
            let contenutoNuovoMessaggio = {

                message: this.nuovoMessaggio,
                date : "12:30:22",
                status : "sent"
            }

            this.contacts[this.index].messages.push(contenutoNuovoMessaggio)
            
            setTimeout(() => {
                let selfMessage = {

                    message: "okkey",
                    date : "12:30:44",
                    status : "received",
                }
                this.contacts[this.index].messages.push(selfMessage)
              }, 2000);
            
        },
        findContact(){


            this.contacts.forEach(contact => {

                console.log(contact.name)
                

                if (contact.name.includes(this.findProfile)){
                    contact.visible = true
                    
                }
                else{
                    contact.visible = false
                    
                }
            
                
            
            });
            console.log(this.findProfile)

            


        }
        
        
    },
    mounted() {
        
        
        

        
    },
    
    
    
    
}).mount('#app')