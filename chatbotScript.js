const chatForm = document.getElementById('chat-form');
        const chatDisplay = document.getElementById('chat-display');
        const userInput = document.getElementById('user-input');

        chatForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const message = userInput.value.trim().toLowerCase(); // Normalize the message to lowercase
            if (message !== "") {
                addMessageToChat('You', message, 'user');
                userInput.value = '';

                let botReply = '';

                // The error message "You exceeded your current quota, please check your plan and
                    //  billing details" indicates that you have hit the usage limits of the
                    //   free tier or your current plan.

                // Custom responses based on user input
                if (message === 'hello') {
                    botReply = 'Hello, How are you?';
                } else if (message === 'how are you?') {
                    botReply = 'I am a bot, but I am here to help you!';
                } else if (message === 'what is your name?') {
                    botReply = 'I am a chatbot created to assist you.';
                } else if (message === 'what can you do?') {
                    botReply = 'I can answer your questions and provide information!';
                } else if (message === 'where are you from?') {
                    botReply = 'I exist in the cloud, ready to assist you anytime!';
                } else if (message === 'who created you?') {
                    botReply = 'I was created by Barra for an API project, however, the ChatGPT API did not work because of an insufficient quota. So, Barra customized each response to each question.';
                } else if (message === 'what is the weather like?') {
                    botReply = 'I cannot check the weather right now, but you can use a weather app!';
                } else if (message === 'tell me a joke') {
                    botReply = 'Why don’t scientists trust atoms? Because they make up everything!';
                } else if (message === 'tell me a fact') {
                    botReply = 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.';
                } else if (message === 'goodbye') {
                    botReply = 'Goodbye! Have a great day!';
                } else if (message === 'thank you') {
                    botReply = 'You are welcome!';
                } else if (message === 'what is the time?') {
                    botReply = 'I do not have access to the current time. Please check your device clock.';
                } else if (message === 'can you help me with my homework?') {
                    botReply = 'Sure, I can try to help! What subject are you working on?';
                } else if (message === 'tell me a story') {
                    botReply = 'Once upon a time, in a land far away, there was a small village surrounded by beautiful forests and rivers...';
                } else if (message === 'do you have any hobbies?') {
                    botReply = 'As a bot, I do not have hobbies, but I enjoy helping people!';
                } else if (message === 'what is your purpose?') {
                    botReply = 'My purpose is to assist and provide information to users like you.';
                } else if (message === 'how old are you?') {
                    botReply = 'I do not have an age, as I am a virtual assistant!';
                } else if (message === 'can you tell me a riddle?') {
                    botReply = 'Sure! What has keys but can’t open locks? A piano!';
                } else if (message === 'what is your favorite color?') {
                    botReply = 'As a bot, I do not have preferences, but I think all colors are beautiful!';
                } else if (message === 'do you eat?') {
                    botReply = 'I do not eat, as I am a virtual assistant!';
                } else if (message === 'do you sleep?') {
                    botReply = 'I do not sleep, I am always here to assist you!';
                } else if (message === 'can you sing?') {
                    botReply = 'I cannot sing, but I can share the lyrics of your favorite song!';
                } else if (message === 'what is your favorite book?') {
                    botReply = 'I do not read books, but I can recommend some if you like!';
                } else if (message === 'can you dance?') {
                    botReply = 'I cannot dance, but I can tell you about different dance styles!';
                } else if (message === 'what is your favorite movie?') {
                    botReply = 'I do not watch movies, but I can suggest some popular ones!';
                } else if (message === 'can you drive?') {
                    botReply = 'I cannot drive, but I can provide information on how to get a driver’s license!';
                } else if (message === 'what is the meaning of life?') {
                    botReply = 'That is a deep question! Many people believe the meaning of life is to find happiness and fulfillment.';
                } else if (message === 'do you believe in aliens?') {
                    botReply = 'There is no concrete evidence of aliens, but the universe is vast and full of possibilities!';
                } else if (message === 'can you tell me a quote?') {
                    botReply = 'Sure! "The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt';
                } else {
                    botReply = 'This is a mock response from the bot.'; // Default mock response
                }

                addMessageToChat('Bot', botReply, 'bot');

            }
        });

        function addMessageToChat(sender, message, senderType) {
            const messageElement = document.createElement('p');
            messageElement.classList.add('message', senderType.toLowerCase());
        
            if (senderType === 'user') {
                messageElement.style.borderColor = '#10a37f';
                messageElement.style.backgroundColor = '#e0f7fa';
            } else if (senderType === 'bot') {
                messageElement.style.borderColor = '#10a37f';
                messageElement.style.backgroundColor = '#fff';
            }
        
            messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
            chatDisplay.appendChild(messageElement);
            chatDisplay.scrollTop = chatDisplay.scrollHeight;
        }
