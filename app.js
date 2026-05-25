const app = {
    currentUser: null,
    robuxBalance: 0,
    lifetimeRobux: 0,
    currentSubject: null,
    currentQuestions: [],
    questionIndex: 0,
    streak: 0,
    gameMode: 'practice',
    userAnswers: [],
    flaggedQuestions: [],
    timerInterval: null,
    timeLeft: 0,
    reviewMode: false,
    
    // New interaction states
    selectedSortIndex: null,
    selectedLeftMatch: null,
    selectedRightMatch: null,

    init() {
        // Event Listeners
        document.getElementById('btn-login').addEventListener('click', () => this.login());
        document.getElementById('btn-continue-user').addEventListener('click', () => {
            const lastUser = localStorage.getItem('last_username');
            if (lastUser) this.loginDirect(lastUser);
        });
        document.getElementById('btn-switch-user').addEventListener('click', () => {
            document.getElementById('login-returning-user-container').classList.add('hidden');
            document.getElementById('login-new-user-container').classList.remove('hidden');
            document.getElementById('login-username').focus();
        });
        
        document.getElementById('btn-next-question').addEventListener('click', () => this.nextQuestion());
        document.getElementById('btn-show-admin').addEventListener('click', () => this.openAdmin());
        document.getElementById('btn-payout').addEventListener('click', () => this.payoutRobux());
        
        // Custom input submission handlers for Practice Mode
        document.getElementById('btn-submit-input').addEventListener('click', () => this.checkInputAnswer());
        document.getElementById('btn-submit-dropdown').addEventListener('click', () => this.checkDropdownAnswer());
        document.getElementById('btn-submit-matrix').addEventListener('click', () => this.checkMatrixAnswer());
        document.getElementById('btn-submit-sorting').addEventListener('click', () => this.checkSortingAnswer());
        document.getElementById('btn-submit-matching').addEventListener('click', () => this.checkMatchingAnswer());
        document.getElementById('btn-submit-word-clicker').addEventListener('click', () => this.checkWordClickerAnswer());
        
        // Check for returning user
        const lastUser = localStorage.getItem('last_username');
        if (lastUser) {
            document.getElementById('returning-username').innerText = lastUser;
            document.getElementById('login-returning-user-container').classList.remove('hidden');
            document.getElementById('login-new-user-container').classList.add('hidden');
        } else {
            document.getElementById('login-returning-user-container').classList.add('hidden');
            document.getElementById('login-new-user-container').classList.remove('hidden');
        }
        
        // Start showing login
        this.showView('login');
    },

    showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
        document.getElementById('view-' + viewId).classList.remove('hidden');
        
        if (['dashboard', 'game', 'summary', 'result'].includes(viewId)) {
            document.getElementById('main-header').classList.remove('hidden');
        } else {
            document.getElementById('main-header').classList.add('hidden');
        }
    },

    async login() {
        const username = document.getElementById('login-username').value.trim();

        if (!username) {
            alert("Skriv inn et navn!");
            return;
        }

        await this.loginDirect(username);
    },

    async loginDirect(username) {
        // Hent eller lag profil
        let profile = await mockDb.getProfile(username);
        if (!profile) {
            // Ny bruker
            profile = {
                username: username,
                robuxBalance: 0,
                lifetimeRobux: 0
            };
            await mockDb.saveProfile(username, profile);
        }

        this.currentUser = profile;
        this.robuxBalance = profile.robuxBalance;
        this.lifetimeRobux = profile.lifetimeRobux || 0;
        
        localStorage.setItem('last_username', username);
        
        document.getElementById('display-name').innerText = username;
        this.updateRobuxDisplay();
        this.showView('dashboard');
    },

    async saveProgress() {
        if (!this.currentUser) return;
        this.currentUser.robuxBalance = this.robuxBalance;
        this.currentUser.lifetimeRobux = this.lifetimeRobux;
        await mockDb.saveProfile(this.currentUser.username, this.currentUser);
    },

    updateRobuxDisplay() {
        document.getElementById('robux-balance').innerText = this.robuxBalance;
    },

    setGameMode(mode) {
        this.gameMode = mode;
        document.getElementById('btn-mode-practice').classList.toggle('active', mode === 'practice');
        document.getElementById('btn-mode-test').classList.toggle('active', mode === 'test');
    },

    startGame(subject) {
        this.currentSubject = subject;
        
        // Reset state
        this.flaggedQuestions = [];
        this.reviewMode = false;
        
        const questions = window.taskDatabase[subject];
        // Sørg for å resette stokkede svaralternativer per oppgave slik at de genereres på nytt
        questions.forEach(q => {
            q.shuffledOptionsForSession = null;
            q.shuffledLeft = null;
            q.shuffledRight = null;
        });
        
        // Tilfeldig stokking av spørsmål
        this.currentQuestions = [...questions].sort(() => Math.random() - 0.5);
        this.questionIndex = 0;
        
        this.userAnswers = new Array(this.currentQuestions.length).fill(null);
        
        // Show/hide components based on Mode
        const streakBox = document.getElementById('streak-box');
        const timerContainer = document.getElementById('game-timer');
        const flagBox = document.getElementById('game-flag-box');
        const bottomBar = document.getElementById('game-bottom-bar');
        const practiceActions = document.getElementById('practice-actions');
        const testActions = document.getElementById('test-actions');
        const qNavigator = document.getElementById('question-navigator');
        
        bottomBar.classList.remove('hidden');
        
        if (this.gameMode === 'test') {
            streakBox.classList.add('hidden');
            timerContainer.classList.remove('hidden');
            flagBox.classList.remove('hidden');
            practiceActions.classList.add('hidden');
            testActions.classList.remove('hidden');
            qNavigator.classList.remove('hidden');
            
            this.timeLeft = (subject === 'english') ? 3600 : 5400; // 60 minutter for engelsk, 90 minutter for regning/lesing
            this.startTimer();
        } else {
            streakBox.classList.remove('hidden');
            timerContainer.classList.add('hidden');
            flagBox.classList.add('hidden');
            practiceActions.classList.remove('hidden');
            testActions.classList.add('hidden');
            qNavigator.classList.add('hidden');
            
            clearInterval(this.timerInterval);
            this.updateStreakDisplay();
        }
        
        // Sørg for at "Avslutt gjennomgang" knappen er skjult ved spillstart
        document.getElementById('btn-exit-review').classList.add('hidden');
        document.getElementById('btn-back-dashboard').classList.remove('hidden');
        
        this.showView('game');
        this.loadQuestion();
    },

    loadQuestion() {
        if (this.questionIndex >= this.currentQuestions.length) {
            if (this.gameMode === 'test') {
                this.showSummary();
            } else {
                alert("Du har gjort alle oppgavene for dette faget! Fantastisk jobba! 🎉");
                this.showView('dashboard');
            }
            return;
        }

        const q = this.currentQuestions[this.questionIndex];
        
        // Splitscreen handling for Passage
        const gameCard = document.querySelector('.game-card');
        if (q.passage) {
            gameCard.classList.add('has-passage');
        } else {
            gameCard.classList.remove('has-passage');
        }

        document.getElementById('question-text').innerHTML = q.question;
        
        // Update Flag button state
        const flagBtn = document.getElementById('btn-flag-question');
        if (this.flaggedQuestions.includes(this.questionIndex)) {
            flagBtn.classList.add('flagged');
        } else {
            flagBtn.classList.remove('flagged');
        }
        
        // Sjekk om oppgaven har en lang tekst (passage) knyttet til seg
        const passageContainer = document.getElementById('passage-container');
        const passageText = document.getElementById('passage-text');
        if (q.passage) {
            passageText.innerHTML = q.passage;
            passageContainer.classList.remove('hidden');
        } else {
            passageContainer.classList.add('hidden');
        }
        
        // Sjekk om oppgaven er en lytteoppgave (audioText)
        const audioContainer = document.getElementById('audio-container');
        const btnPlayAudio = document.getElementById('btn-play-audio');
        if (q.audioText) {
            audioContainer.classList.remove('hidden');
            // Fjern evt gamle event listeners ved å klone knappen
            const newBtn = btnPlayAudio.cloneNode(true);
            btnPlayAudio.parentNode.replaceChild(newBtn, btnPlayAudio);
            newBtn.onclick = () => this.playTextToSpeech(q.audioText);
        } else {
            audioContainer.classList.add('hidden');
        }
        
        // Oppdater progress bar
        const progress = (this.questionIndex / this.currentQuestions.length) * 100;
        document.getElementById('level-progress').style.width = progress + '%';

        // Oppdater progress text og deaktiver Neste-knapp i øvingsmodus
        if (this.gameMode === 'practice') {
            const progressText = `Oppgave ${this.questionIndex + 1} av ${this.currentQuestions.length}`;
            document.getElementById('practice-progress-text').innerText = progressText;
            document.getElementById('btn-next-question').disabled = true;
        }

        // Tøm alle mulige svarkontainere og skjul feedback
        const optContainer = document.getElementById('options-container');
        const inputContainer = document.getElementById('input-container');
        const dropdownContainer = document.getElementById('dropdown-container');
        const matrixContainer = document.getElementById('matrix-container');
        const sortingContainer = document.getElementById('sorting-container');
        const matchingContainer = document.getElementById('matching-container');
        const wordClickerContainer = document.getElementById('word-clicker-container');
        
        optContainer.innerHTML = '';
        optContainer.classList.add('hidden');
        inputContainer.classList.add('hidden');
        dropdownContainer.classList.add('hidden');
        matrixContainer.classList.add('hidden');
        sortingContainer.classList.add('hidden');
        matchingContainer.classList.add('hidden');
        wordClickerContainer.classList.add('hidden');
        
        document.getElementById('feedback-message').classList.add('hidden');
        document.getElementById('feedback-explanation').classList.add('hidden');

        // Bildehåndtering
        const imageContainer = document.getElementById('image-container');
        if (q.image) {
            document.getElementById('task-image').src = q.image;
            imageContainer.classList.remove('hidden');
        } else {
            imageContainer.classList.add('hidden');
        }

        // Render Question Navigator in Test or Review modes
        if (this.gameMode === 'test' || this.reviewMode) {
            this.renderQuestionNavigator();
        }

        const inputType = q.type || 'multiple_choice';

        // --- RENDER SVARFELT BASERT PÅ OPPGAVETYPE ---
        if (inputType === 'input') {
            inputContainer.classList.remove('hidden');
            const txtInput = document.getElementById('text-answer-input');
            const submitBtn = document.getElementById('btn-submit-input');
            
            txtInput.value = this.userAnswers[this.questionIndex] || '';
            txtInput.disabled = this.reviewMode;
            submitBtn.disabled = this.reviewMode;
            
            if (this.gameMode === 'test' && !this.reviewMode) {
                // Skjul Svar-knapp i prøvemodus; vi lagrer ved inntasting
                submitBtn.classList.add('hidden');
                txtInput.oninput = () => {
                    this.userAnswers[this.questionIndex] = txtInput.value.trim();
                    this.renderQuestionNavigator();
                };
            } else if (this.reviewMode) {
                // Gjennomgangsmodus
                submitBtn.classList.add('hidden');
                const userAns = this.userAnswers[this.questionIndex] || '';
                const isCorrect = userAns.toLowerCase() === q.correct.toLowerCase();
                txtInput.style.borderColor = isCorrect ? 'var(--success-color)' : 'var(--error-color)';
                this.showReviewFeedback(isCorrect, q.correct, q.explanation);
            } else {
                // Øvingsmodus
                submitBtn.classList.remove('hidden');
                submitBtn.disabled = false;
                txtInput.style.borderColor = '#eee';
            }
        } 
        else if (inputType === 'dropdown') {
            dropdownContainer.classList.remove('hidden');
            const dropdownText = document.getElementById('dropdown-text');
            const submitBtn = document.getElementById('btn-submit-dropdown');
            
            const parts = q.question.split("___");
            let selectHtml = "";
            
            if (this.reviewMode) {
                submitBtn.classList.add('hidden');
                const userAns = this.userAnswers[this.questionIndex] || '';
                const isCorrect = userAns === q.correct;
                
                selectHtml = `<select class="custom-select" style="border-color: ${isCorrect ? 'var(--success-color)' : 'var(--error-color)'}" disabled>
                    <option>${userAns || 'Ikke besvart'}</option>
                    ${!isCorrect ? `<option>${q.correct} (Fasit)</option>` : ''}
                </select>`;
                
                dropdownText.innerHTML = parts[0] + selectHtml + (parts[1] || "");
                this.showReviewFeedback(isCorrect, q.correct, q.explanation);
            } else if (this.gameMode === 'test') {
                submitBtn.classList.add('hidden');
                
                selectHtml = `<select id="inline-dropdown" class="custom-select" onchange="app.saveDropdownAnswer(this.value)">
                    <option value="">-- Velg --</option>
                    ${q.options.map(opt => {
                        const selected = this.userAnswers[this.questionIndex] === opt ? 'selected' : '';
                        return `<option value="${opt}" ${selected}>${opt}</option>`;
                    }).join('')}
                </select>`;
                
                dropdownText.innerHTML = parts[0] + selectHtml + (parts[1] || "");
            } else {
                // Øvingsmodus
                submitBtn.classList.remove('hidden');
                submitBtn.disabled = false;
                
                selectHtml = `<select id="inline-dropdown" class="custom-select">
                    <option value="">-- Velg --</option>
                    ${q.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>`;
                
                dropdownText.innerHTML = parts[0] + selectHtml + (parts[1] || "");
            }
        } 
        else if (inputType === 'matrix') {
            matrixContainer.classList.remove('hidden');
            const tbody = document.getElementById('matrix-body');
            const submitBtn = document.getElementById('btn-submit-matrix');
            tbody.innerHTML = '';
            
            if (this.reviewMode) {
                submitBtn.classList.add('hidden');
                let allCorrect = true;
                
                q.matrixRows.forEach((row, idx) => {
                    const savedVal = this.userAnswers[this.questionIndex] ? this.userAnswers[this.questionIndex][idx] : null;
                    const isCorrect = savedVal === row.correct;
                    if (!isCorrect) allCorrect = false;
                    
                    const tr = document.createElement('tr');
                    tr.style.backgroundColor = isCorrect ? 'rgba(105, 240, 174, 0.1)' : 'rgba(255, 138, 128, 0.1)';
                    tr.innerHTML = `
                        <td>${row.text} ${isCorrect ? '✅' : `❌ (Fasit: ${row.correct})`}</td>
                        <td><input type="radio" name="matrix_${idx}" value="Riktig" ${savedVal === 'Riktig' ? 'checked' : ''} disabled></td>
                        <td><input type="radio" name="matrix_${idx}" value="Galt" ${savedVal === 'Galt' ? 'checked' : ''} disabled></td>
                    `;
                    tbody.appendChild(tr);
                });
                
                this.showReviewFeedback(allCorrect, "Se tabellen ovenfor for detaljer", q.explanation);
            } else {
                q.matrixRows.forEach((row, idx) => {
                    const savedVal = this.userAnswers[this.questionIndex] ? this.userAnswers[this.questionIndex][idx] : null;
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${row.text}</td>
                        <td><input type="radio" name="matrix_${idx}" value="Riktig" ${savedVal === 'Riktig' ? 'checked' : ''}></td>
                        <td><input type="radio" name="matrix_${idx}" value="Galt" ${savedVal === 'Galt' ? 'checked' : ''}></td>
                    `;
                    tbody.appendChild(tr);
                });
                
                if (this.gameMode === 'test') {
                    submitBtn.classList.add('hidden');
                    // Bind change listener for radios to save answers in real-time
                    tbody.querySelectorAll('input[type="radio"]').forEach(radio => {
                        radio.onchange = () => {
                            if (!this.userAnswers[this.questionIndex]) {
                                this.userAnswers[this.questionIndex] = [];
                            }
                            q.matrixRows.forEach((row, rIdx) => {
                                const checked = document.querySelector(`input[name="matrix_${rIdx}"]:checked`);
                                this.userAnswers[this.questionIndex][rIdx] = checked ? checked.value : null;
                            });
                            this.renderQuestionNavigator();
                        };
                    });
                } else {
                    submitBtn.classList.remove('hidden');
                    submitBtn.disabled = false;
                }
            }
        }
        else if (inputType === 'sorting') {
            sortingContainer.classList.remove('hidden');
            const list = document.getElementById('sorting-list');
            const submitBtn = document.getElementById('btn-submit-sorting');
            list.innerHTML = '';
            
            if (!this.userAnswers[this.questionIndex]) {
                // Generer tilfeldig startrekkefølge hvis ubesvart
                this.userAnswers[this.questionIndex] = [...q.options].sort(() => Math.random() - 0.5);
            }
            
            const currentOrder = this.userAnswers[this.questionIndex];
            this.selectedSortIndex = null; // reset
            
            if (this.gameMode === 'test' && !this.reviewMode) {
                submitBtn.classList.add('hidden');
            } else {
                submitBtn.classList.remove('hidden');
                submitBtn.disabled = this.reviewMode;
            }
            
            currentOrder.forEach((opt, index) => {
                const div = document.createElement('div');
                div.className = 'sort-item slide-up';
                div.innerText = opt;
                div.style.animationDelay = (index * 0.1) + 's';
                
                if (this.reviewMode) {
                    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(q.correct);
                    div.classList.add(isCorrect ? 'correct' : 'wrong');
                } else {
                    div.onclick = () => {
                        if (this.selectedSortIndex === null) {
                            this.selectedSortIndex = index;
                            div.classList.add('selected');
                        } else {
                            const firstIndex = this.selectedSortIndex;
                            const temp = currentOrder[firstIndex];
                            currentOrder[firstIndex] = currentOrder[index];
                            currentOrder[index] = temp;
                            
                            this.userAnswers[this.questionIndex] = currentOrder;
                            this.renderQuestionNavigator();
                            this.loadQuestion();
                        }
                    };
                }
                list.appendChild(div);
            });
            
            if (this.reviewMode) {
                const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(q.correct);
                this.showReviewFeedback(isCorrect, q.correct.join(', '), q.explanation);
            }
        }
        else if (inputType === 'matching') {
            matchingContainer.classList.remove('hidden');
            const leftCol = document.getElementById('matching-left');
            const rightCol = document.getElementById('matching-right');
            const submitBtn = document.getElementById('btn-submit-matching');
            leftCol.innerHTML = '';
            rightCol.innerHTML = '';
            
            this.selectedLeftMatch = null;
            this.selectedRightMatch = null;
            
            if (!this.userAnswers[this.questionIndex]) {
                this.userAnswers[this.questionIndex] = {};
            }
            const matches = this.userAnswers[this.questionIndex];
            
            if (this.gameMode === 'test' && !this.reviewMode) {
                submitBtn.classList.add('hidden');
            } else {
                submitBtn.classList.remove('hidden');
                submitBtn.disabled = this.reviewMode;
            }
            
            // Shuffle kolonnene kun én gang per sesjon
            if (!q.shuffledLeft) {
                q.shuffledLeft = [...q.leftItems].sort(() => Math.random() - 0.5);
                q.shuffledRight = [...q.rightItems].sort(() => Math.random() - 0.5);
            }
            
            // Render venstre kolonne
            q.shuffledLeft.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'match-btn';
                btn.innerText = item;
                
                const hasMatch = matches[item] !== undefined;
                
                if (this.reviewMode) {
                    btn.disabled = true;
                    const correctTarget = q.correct[item];
                    const userTarget = matches[item];
                    if (userTarget === correctTarget) {
                        btn.classList.add('matched');
                    } else if (userTarget !== undefined) {
                        btn.classList.add('wrong-match');
                    }
                } else {
                    if (hasMatch) {
                        btn.classList.add('matched');
                        btn.innerText += ` ➔ (${matches[item]})`;
                    }
                    
                    btn.onclick = () => {
                        document.querySelectorAll('#matching-left .match-btn').forEach(b => b.classList.remove('selected'));
                        if (hasMatch) {
                            delete matches[item];
                            this.renderQuestionNavigator();
                            this.loadQuestion();
                        } else {
                            this.selectedLeftMatch = item;
                            btn.classList.add('selected');
                            this.tryTriggerMatch();
                        }
                    };
                }
                leftCol.appendChild(btn);
            });
            
            // Render høyre kolonne
            q.shuffledRight.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'match-btn';
                btn.innerText = item;
                
                const isMatched = Object.values(matches).includes(item);
                
                if (this.reviewMode) {
                    btn.disabled = true;
                    const userLeftKey = Object.keys(matches).find(k => matches[k] === item);
                    if (userLeftKey && q.correct[userLeftKey] === item) {
                        btn.classList.add('matched');
                    } else if (userLeftKey !== undefined) {
                        btn.classList.add('wrong-match');
                    }
                } else {
                    if (isMatched) {
                        btn.classList.add('matched');
                    }
                    
                    btn.onclick = () => {
                        document.querySelectorAll('#matching-right .match-btn').forEach(b => b.classList.remove('selected'));
                        if (isMatched) {
                            const leftKey = Object.keys(matches).find(k => matches[k] === item);
                            if (leftKey) delete matches[leftKey];
                            this.renderQuestionNavigator();
                            this.loadQuestion();
                        } else {
                            this.selectedRightMatch = item;
                            btn.classList.add('selected');
                            this.tryTriggerMatch();
                        }
                    };
                }
                rightCol.appendChild(btn);
            });
            
            if (this.reviewMode) {
                let allCorrect = true;
                q.leftItems.forEach(left => {
                    if (matches[left] !== q.correct[left]) allCorrect = false;
                });
                this.showReviewFeedback(allCorrect, "Se kolonnene ovenfor", q.explanation);
            }
        }
        else if (inputType === 'word_clicker') {
            wordClickerContainer.classList.remove('hidden');
            const clickTextEl = document.getElementById('word-clicker-text');
            const submitBtn = document.getElementById('btn-submit-word-clicker');
            clickTextEl.innerHTML = '';
            
            if (this.gameMode === 'test' && !this.reviewMode) {
                submitBtn.classList.add('hidden');
            } else {
                submitBtn.classList.remove('hidden');
                submitBtn.disabled = this.reviewMode;
            }
            
            const rawText = q.passageText || q.passage || "";
            const words = rawText.split(/\s+/);
            
            words.forEach((word, idx) => {
                const span = document.createElement('span');
                span.className = 'click-word';
                const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
                span.innerText = word + ' ';
                
                const isSelected = this.userAnswers[this.questionIndex] === cleanWord;
                
                if (this.reviewMode) {
                    if (cleanWord.toLowerCase() === q.correct.toLowerCase()) {
                        span.classList.add('correct-word');
                    } else if (isSelected) {
                        span.classList.add('wrong-word');
                    }
                } else {
                    if (isSelected) {
                        span.classList.add('selected');
                    }
                    
                    span.onclick = () => {
                        document.querySelectorAll('.click-word').forEach(s => s.classList.remove('selected'));
                        span.classList.add('selected');
                        this.userAnswers[this.questionIndex] = cleanWord;
                        this.renderQuestionNavigator();
                    };
                }
                clickTextEl.appendChild(span);
            });
            
            if (this.reviewMode) {
                const userAns = this.userAnswers[this.questionIndex] || '';
                const isCorrect = userAns.toLowerCase() === q.correct.toLowerCase();
                this.showReviewFeedback(isCorrect, q.correct, q.explanation);
            }
        }
        else {
            // Standard Flervalg
            optContainer.classList.remove('hidden');
            
            // Hvis det er i test- eller gjennomgangsmodus, bevarer vi rekkefølgen så det ikke skifter når man blar frem/tilbake
            if (!q.shuffledOptionsForSession) {
                q.shuffledOptionsForSession = [...q.options].sort(() => Math.random() - 0.5);
                q.currentCorrectIndex = q.shuffledOptionsForSession.indexOf(q.correct);
            }
            
            const renderOptions = q.shuffledOptionsForSession;
            
            renderOptions.forEach((opt, index) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn slide-up';
                btn.innerText = opt;
                btn.style.animationDelay = (index * 0.1) + 's';
                
                if (this.reviewMode) {
                    btn.disabled = true;
                    const userAns = this.userAnswers[this.questionIndex];
                    if (opt === q.correct) {
                        btn.classList.add('correct');
                    } else if (opt === userAns) {
                        btn.classList.add('wrong');
                    }
                } else if (this.gameMode === 'test') {
                    if (this.userAnswers[this.questionIndex] === opt) {
                        btn.classList.add('selected');
                    }
                    btn.onclick = () => {
                        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                        this.userAnswers[this.questionIndex] = opt;
                        this.renderQuestionNavigator();
                    };
                } else {
                    // Øvingsmodus
                    btn.onclick = () => this.checkAnswer(index, btn);
                }
                optContainer.appendChild(btn);
            });
            
            if (this.reviewMode) {
                const userAns = this.userAnswers[this.questionIndex];
                const isCorrect = userAns === q.correct;
                this.showReviewFeedback(isCorrect, q.correct, q.explanation);
            }
        }
    },

    tryTriggerMatch() {
        if (this.selectedLeftMatch && this.selectedRightMatch) {
            const left = this.selectedLeftMatch;
            const right = this.selectedRightMatch;
            
            const matches = this.userAnswers[this.questionIndex];
            matches[left] = right;
            
            this.selectedLeftMatch = null;
            this.selectedRightMatch = null;
            
            this.renderQuestionNavigator();
            this.loadQuestion();
        }
    },

    checkAnswer(selectedIndex, btnElement) {
        const q = this.currentQuestions[this.questionIndex];
        const isCorrect = selectedIndex === q.currentCorrectIndex;
        
        this.validateAnswer(isCorrect, btnElement.innerText, q.correct, q.explanation, () => {
            const buttons = document.querySelectorAll('.option-btn');
            buttons.forEach(b => b.disabled = true);
            if (isCorrect) {
                btnElement.classList.add('correct');
            } else {
                btnElement.classList.add('wrong');
                buttons[q.currentCorrectIndex].classList.add('correct');
            }
        });
    },

    checkInputAnswer() {
        const inputField = document.getElementById('text-answer-input');
        const ans = inputField.value.trim();
        if (!ans) {
            alert("Skriv inn et svar!");
            return;
        }
        
        const q = this.currentQuestions[this.questionIndex];
        const isCorrect = ans.toLowerCase() === q.correct.toLowerCase();
        
        this.validateAnswer(isCorrect, ans, q.correct, q.explanation, () => {
            inputField.disabled = true;
            document.getElementById('btn-submit-input').disabled = true;
            inputField.style.borderColor = isCorrect ? 'var(--success-color)' : 'var(--error-color)';
        });
    },

    checkDropdownAnswer() {
        const select = document.getElementById('inline-dropdown');
        const ans = select.value;
        if (!ans) {
            alert("Velg et svar!");
            return;
        }
        
        const q = this.currentQuestions[this.questionIndex];
        const isCorrect = ans === q.correct;
        
        this.validateAnswer(isCorrect, ans, q.correct, q.explanation, () => {
            select.disabled = true;
            document.getElementById('btn-submit-dropdown').disabled = true;
            select.style.borderColor = isCorrect ? 'var(--success-color)' : 'var(--error-color)';
        });
    },

    checkMatrixAnswer() {
        const q = this.currentQuestions[this.questionIndex];
        let allCorrect = true;
        
        q.matrixRows.forEach((row, idx) => {
            const checked = document.querySelector(`input[name="matrix_${idx}"]:checked`);
            if (!checked || checked.value !== row.correct) {
                allCorrect = false;
            }
            document.querySelectorAll(`input[name="matrix_${idx}"]`).forEach(r => r.disabled = true);
        });
        
        document.getElementById('btn-submit-matrix').disabled = true;
        
        this.validateAnswer(allCorrect, "Dine valg", "Riktig avkrysning i tabellen", q.explanation, () => {
            // Callback for disabling is already run above
        });
    },

    checkSortingAnswer() {
        const q = this.currentQuestions[this.questionIndex];
        const currentOrder = this.userAnswers[this.questionIndex];
        if (!currentOrder) return alert("Flytt boksene først!");
        
        const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(q.correct);
        
        document.querySelectorAll('.sort-item').forEach((div) => {
            div.classList.add(isCorrect ? 'correct' : 'wrong');
            div.style.pointerEvents = 'none';
        });
        document.getElementById('btn-submit-sorting').disabled = true;
        
        this.validateAnswer(isCorrect, currentOrder.join(', '), q.correct.join(', '), q.explanation, () => {});
    },

    checkMatchingAnswer() {
        const q = this.currentQuestions[this.questionIndex];
        const matches = this.userAnswers[this.questionIndex];
        if (!matches || Object.keys(matches).length < q.leftItems.length) {
            return alert("Koble sammen alle parene først!");
        }
        
        let allCorrect = true;
        q.leftItems.forEach(left => {
            if (matches[left] !== q.correct[left]) allCorrect = false;
        });
        
        document.querySelectorAll('.match-btn').forEach(btn => {
            btn.style.pointerEvents = 'none';
            btn.disabled = true;
        });
        document.getElementById('btn-submit-matching').disabled = true;
        
        this.validateAnswer(allCorrect, "Dine koblinger", "Fasit er koblet i kolonnene", q.explanation, () => {});
    },

    checkWordClickerAnswer() {
        const q = this.currentQuestions[this.questionIndex];
        const userAns = this.userAnswers[this.questionIndex];
        if (!userAns) return alert("Klikk på et ord i teksten først!");
        
        const isCorrect = userAns.toLowerCase() === q.correct.toLowerCase();
        
        document.querySelectorAll('.click-word').forEach(span => {
            span.style.pointerEvents = 'none';
            const clean = span.innerText.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
            if (clean.toLowerCase() === q.correct.toLowerCase()) {
                span.classList.add('correct-word');
            } else if (clean === userAns) {
                span.classList.add('wrong-word');
            }
        });
        document.getElementById('btn-submit-word-clicker').disabled = true;
        
        this.validateAnswer(isCorrect, userAns, q.correct, q.explanation, () => {});
    },

    validateAnswer(isCorrect, userAnswer, correctVal, explanation, disableElementsFn) {
        if (disableElementsFn) disableElementsFn();
        
        const feedbackObj = document.getElementById('feedback-message');
        const titleObj = document.getElementById('feedback-title');
        const descObj = document.getElementById('feedback-desc');
        const explanationObj = document.getElementById('feedback-explanation');
        const explanationText = document.getElementById('explanation-text');
        
        feedbackObj.classList.remove('hidden', 'success', 'error');
        
        if (isCorrect) {
            feedbackObj.classList.add('success');
            explanationObj.classList.add('hidden');
            this.streak++;
            
            let robuxEarned = 1;
            titleObj.innerText = "Riktig! +1 Robux 🎉";
            descObj.innerText = "Fantastisk jobba!";
            
            if (this.streak === 5) {
                robuxEarned += 2;
                titleObj.innerText = "5 PÅ RAD! +3 Robux! 🔥";
                this.showStreakOverlay('streak-5-overlay');
                this.playSpecialSound('mid');
            } else if (this.streak === 10) {
                robuxEarned += 5;
                titleObj.innerText = "10 PÅ RAD! +6 Robux! 🌟";
                this.showStreakOverlay('streak-10-overlay');
                this.playSpecialSound('high');
                this.streak = 0;
            } else {
                this.playCoinSound();
            }
            
            this.robuxBalance += robuxEarned;
            this.lifetimeRobux += robuxEarned;
            this.saveProgress();
            this.updateRobuxDisplay();
            this.updateStreakDisplay();
            this.playCoinAnimation();
            
            const bank = document.querySelector('.robux-bank');
            bank.classList.remove('bump');
            void bank.offsetWidth;
            bank.classList.add('bump');
        } else {
            feedbackObj.classList.add('error');
            titleObj.innerText = "Nesten! 🥺";
            
            const q = this.currentQuestions[this.questionIndex];
            if (q.type === 'input') {
                descObj.innerText = `Du skrev: ${userAnswer}. Fasit var: ${correctVal}`;
            } else {
                descObj.innerText = `Svaret var: ${correctVal}`;
            }
            
            explanationText.innerHTML = explanation || "Prøv å huske riktig svar til neste gang!";
            explanationObj.classList.remove('hidden');
            
            this.currentQuestions.push(q);
            this.streak = 0;
            this.updateStreakDisplay();
        }
        
        // Aktiver Neste-knapp i bunnbaren i øvingsmodus
        document.getElementById('btn-next-question').disabled = false;
        
        feedbackObj.classList.remove('hidden');
    },

    showReviewFeedback(isCorrect, correctVal, explanation) {
        const feedbackObj = document.getElementById('feedback-message');
        const titleObj = document.getElementById('feedback-title');
        const descObj = document.getElementById('feedback-desc');
        const explanationObj = document.getElementById('feedback-explanation');
        const explanationText = document.getElementById('explanation-text');
        
        feedbackObj.classList.remove('hidden', 'success', 'error');
        feedbackObj.classList.add(isCorrect ? 'success' : 'error');
        
        if (isCorrect) {
            titleObj.innerText = "Riktig svar! 🎉";
            descObj.innerText = "Svaret ditt var helt rett.";
        } else {
            titleObj.innerText = "Feil svar 🥺";
            const q = this.currentQuestions[this.questionIndex];
            const userAns = this.userAnswers[this.questionIndex];
            
            if (q.type === 'dropdown') {
                descObj.innerText = "Du valgte feil ord.";
            } else if (q.type === 'matrix') {
                descObj.innerText = "Tabellen over inneholder feil.";
            } else if (q.type === 'sorting') {
                descObj.innerText = `Rekkefølgen var feil. Riktig: ${correctVal}`;
            } else if (q.type === 'matching') {
                descObj.innerText = "Noen av parene ble koblet feil.";
            } else if (q.type === 'word_clicker') {
                descObj.innerText = `Du valgte: "${userAns || 'Ingenting'}". Riktig ord: "${correctVal}"`;
            } else {
                descObj.innerText = `Du svarte: ${userAns || 'Ikke besvart'}. Fasit: ${correctVal}`;
            }
        }
        
        explanationText.innerHTML = explanation || "Ingen forklaring tilgjengelig.";
        explanationObj.classList.remove('hidden');
        feedbackObj.classList.remove('hidden');
    },

    nextQuestion() {
        this.questionIndex++;
        this.loadQuestion();
    },

    prevQuestion() {
        if (this.questionIndex > 0) {
            this.questionIndex--;
            this.loadQuestion();
        }
    },

    nextQuestionTest() {
        if (this.questionIndex < this.currentQuestions.length - 1) {
            this.questionIndex++;
            this.loadQuestion();
        } else {
            this.showSummary();
        }
    },

    toggleFlag() {
        const idx = this.questionIndex;
        const btn = document.getElementById('btn-flag-question');
        if (this.flaggedQuestions.includes(idx)) {
            this.flaggedQuestions = this.flaggedQuestions.filter(i => i !== idx);
            btn.classList.remove('flagged');
        } else {
            this.flaggedQuestions.push(idx);
            btn.classList.add('flagged');
        }
        this.renderQuestionNavigator();
    },

    saveDropdownAnswer(val) {
        this.userAnswers[this.questionIndex] = val;
        this.renderQuestionNavigator();
    },

    renderQuestionNavigator() {
        const container = document.getElementById('question-navigator');
        container.innerHTML = '';
        container.classList.remove('hidden');
        
        this.currentQuestions.forEach((q, idx) => {
            const circle = document.createElement('div');
            circle.className = 'nav-circle';
            circle.innerText = idx + 1;
            
            if (idx === this.questionIndex) {
                circle.classList.add('current');
            }
            
            if (this.reviewMode) {
                const userAns = this.userAnswers[idx];
                
                let isCorrect = false;
                if (userAns !== null && userAns !== undefined && userAns !== '') {
                    if (q.type === 'matrix') {
                        isCorrect = true;
                        q.matrixRows.forEach((row, rIdx) => {
                            if (!userAns[rIdx] || userAns[rIdx] !== row.correct) isCorrect = false;
                        });
                    } else if (q.type === 'dropdown') {
                        isCorrect = Array.isArray(userAns) ? userAns[0] === q.correct : userAns === q.correct;
                    } else if (q.type === 'sorting') {
                        isCorrect = JSON.stringify(userAns) === JSON.stringify(q.correct);
                    } else if (q.type === 'matching') {
                        isCorrect = true;
                        q.leftItems.forEach(left => {
                            if (userAns[left] !== q.correct[left]) isCorrect = false;
                        });
                    } else {
                        isCorrect = userAns.toString().toLowerCase() === q.correct.toString().toLowerCase();
                    }
                }
                
                if (userAns !== null && userAns !== undefined && userAns !== '') {
                    circle.classList.add(isCorrect ? 'correct' : 'wrong');
                } else {
                    circle.classList.add('wrong');
                }
            } else {
                const userAns = this.userAnswers[idx];
                let hasAnswered = false;
                if (userAns !== null && userAns !== undefined && userAns !== '') {
                    if (q.type === 'matching') {
                        hasAnswered = Object.keys(userAns).length > 0;
                    } else if (q.type === 'sorting') {
                        hasAnswered = true; // Sortering starter med verdier allerede
                    } else {
                        hasAnswered = true;
                    }
                }
                
                if (hasAnswered) {
                    circle.classList.add('answered');
                }
                if (this.flaggedQuestions.includes(idx)) {
                    circle.classList.add('flagged');
                }
            }
            
            circle.onclick = () => {
                this.questionIndex = idx;
                this.loadQuestion();
            };
            container.appendChild(circle);
        });
    },

    showSummary() {
        clearInterval(this.timerInterval);
        this.showView('summary');
        const grid = document.getElementById('summary-grid');
        grid.innerHTML = '';
        
        this.currentQuestions.forEach((q, idx) => {
            const item = document.createElement('div');
            item.className = 'summary-item';
            item.onclick = () => {
                this.questionIndex = idx;
                this.showView('game');
                this.loadQuestion();
                if (this.gameMode === 'test' && !this.reviewMode) {
                    this.startTimer();
                }
            };
            
            const qText = document.createElement('span');
            qText.className = 'summary-q-text';
            qText.innerText = `Oppgave ${idx + 1}: ${q.question.replace(/<[^>]*>/g, '')}`; // fjern HTML tags i oppsummering
            
            const status = document.createElement('span');
            status.className = 'summary-status';
            
            const userAns = this.userAnswers[idx];
            const isFlagged = this.flaggedQuestions.includes(idx);
            let hasAnswered = false;
            if (userAns !== null && userAns !== undefined && userAns !== '') {
                if (q.type === 'matching') {
                    hasAnswered = Object.keys(userAns).length > 0;
                } else if (q.type === 'sorting') {
                    hasAnswered = true;
                } else {
                    hasAnswered = true;
                }
            }
            
            if (isFlagged) {
                status.innerText = '🚩 Flagget';
                status.classList.add('status-flagged');
            } else if (hasAnswered) {
                status.innerText = '✓ Besvart';
                status.classList.add('status-answered');
            } else {
                status.innerText = '⚠️ Ubesvart';
                status.classList.add('status-unanswered');
            }
            
            item.appendChild(qText);
            item.appendChild(status);
            grid.appendChild(item);
        });
    },

    backToTest() {
        this.showView('game');
        this.loadQuestion();
        if (this.gameMode === 'test') {
            this.startTimer();
        }
    },

    submitTest() {
        clearInterval(this.timerInterval);
        
        let correctCount = 0;
        this.currentQuestions.forEach((q, idx) => {
            const userAns = this.userAnswers[idx];
            if (userAns !== null && userAns !== undefined && userAns !== '') {
                if (q.type === 'matrix') {
                    let matrixCorrect = true;
                    q.matrixRows.forEach((row, rIdx) => {
                        if (!userAns[rIdx] || userAns[rIdx] !== row.correct) matrixCorrect = false;
                    });
                    if (matrixCorrect) correctCount++;
                } else if (q.type === 'dropdown') {
                    const isCorrect = Array.isArray(userAns) ? userAns[0] === q.correct : userAns === q.correct;
                    if (isCorrect) correctCount++;
                } else if (q.type === 'sorting') {
                    const isCorrect = JSON.stringify(userAns) === JSON.stringify(q.correct);
                    if (isCorrect) correctCount++;
                } else if (q.type === 'matching') {
                    let matchingCorrect = true;
                    q.leftItems.forEach(left => {
                        if (userAns[left] !== q.correct[left]) matchingCorrect = false;
                    });
                    if (matchingCorrect) correctCount++;
                } else if (q.type === 'word_clicker') {
                    const isCorrect = userAns.toString().toLowerCase() === q.correct.toString().toLowerCase();
                    if (isCorrect) correctCount++;
                } else {
                    if (userAns.toString().toLowerCase() === q.correct.toString().toLowerCase()) {
                        correctCount++;
                    }
                }
            }
        });
        
        const totalCount = this.currentQuestions.length;
        
        // Belønning i prøvemodus: 1 Robux per riktig svar, pluss en bonus på 5 Robux for alt riktig
        let robuxEarned = correctCount;
        if (correctCount === totalCount && totalCount > 0) {
            robuxEarned += 5;
        }
        
        this.robuxBalance += robuxEarned;
        this.lifetimeRobux += robuxEarned;
        this.saveProgress();
        this.updateRobuxDisplay();
        
        this.showView('result');
        document.getElementById('result-score').innerText = `${correctCount} av ${totalCount}`;
        document.getElementById('result-robux-earned').innerText = `${robuxEarned}`;
        
        // Spill fanfare
        this.playSpecialSound('high');
    },

    startReview() {
        this.reviewMode = true;
        this.questionIndex = 0;
        
        // Skjul timer, flagg og streaks under gjennomgang
        document.getElementById('game-timer').classList.add('hidden');
        document.getElementById('game-flag-box').classList.add('hidden');
        document.getElementById('streak-box').classList.add('hidden');
        // Vis bunnbar og test-kontroller under gjennomgang
        document.getElementById('game-bottom-bar').classList.remove('hidden');
        document.getElementById('practice-actions').classList.add('hidden');
        document.getElementById('test-actions').classList.remove('hidden');
        
        document.getElementById('btn-back-dashboard').classList.add('hidden');
        document.getElementById('btn-exit-review').classList.remove('hidden');
        
        this.showView('game');
        this.loadQuestion();
    },

    exitReview() {
        this.reviewMode = false;
        document.getElementById('btn-exit-review').classList.add('hidden');
        document.getElementById('btn-back-dashboard').classList.remove('hidden');
        this.showView('dashboard');
    },

    startTimer() {
        clearInterval(this.timerInterval);
        const timerEl = document.getElementById('game-timer');
        const countdownEl = document.getElementById('timer-countdown');
        timerEl.classList.remove('hidden', 'urgent');
        
        const updateDisplay = () => {
            const m = Math.floor(this.timeLeft / 60);
            const s = this.timeLeft % 60;
            countdownEl.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            
            if (this.timeLeft <= 300) {
                timerEl.classList.add('urgent');
            }
            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                alert("Tiden er ute! Prøven leveres automatisk.");
                this.submitTest();
            }
        };
        
        updateDisplay();
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            updateDisplay();
        }, 1000);
    },

    updateStreakDisplay() {
        document.getElementById('streak-counter').innerText = this.streak;
    },

    playCoinAnimation() {
        const overlay = document.getElementById('coin-overlay');
        const coin = document.createElement('div');
        coin.className = 'falling-coin';
        
        // Start mynten fra tilfeldig x-posisjon over skjermen
        coin.style.left = Math.random() * 80 + 10 + '%';
        overlay.appendChild(coin);
        
        setTimeout(() => {
            coin.remove();
        }, 1500);
    },

    playCoinSound() {
        // Opprett lydenhet (kun første gang)
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        
        const osc = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);
        
        // En fin, ren "kling" lyd
        osc.type = 'sine';
        
        // Tonehøyde som glir raskt opp (som en klassisk mynt-lyd)
        osc.frequency.setValueAtTime(987.77, this.audioCtx.currentTime); // B5
        osc.frequency.setValueAtTime(1318.51, this.audioCtx.currentTime + 0.1); // E6
        
        // Lydstyrke som fader ut
        gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, this.audioCtx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.5);
        
        osc.start(this.audioCtx.currentTime);
        osc.stop(this.audioCtx.currentTime + 0.5);
    },

    showStreakOverlay(id) {
        const overlay = document.getElementById(id);
        overlay.classList.remove('hidden');
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 3000);
    },

    playSpecialSound(type) {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        
        const osc = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);
        
        osc.type = type === 'high' ? 'square' : 'triangle';
        
        // Spill en arpeggio/fanfare
        const now = this.audioCtx.currentTime;
        if (type === 'high') { // 10 streak
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
            osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
        } else { // 5 streak
            osc.frequency.setValueAtTime(440, now); // A4
            osc.frequency.setValueAtTime(554.37, now + 0.15); // C#5
            osc.frequency.setValueAtTime(659.25, now + 0.3); // E5
        }
        
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
        
        osc.start(now);
        osc.stop(now + 1);
        
        // Spawn multiple coins
        for(let i = 0; i < (type === 'high' ? 10 : 5); i++) {
            setTimeout(() => this.playCoinAnimation(), i * 150);
        }
    },

    playTextToSpeech(text) {
        // Avbryt eventuell tale som allerede spilles
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; // Tvinger frem engelsk uttale
        utterance.rate = 0.9; // Ørlite grann saktere for å gjøre det tydelig
        
        // Prøv å finne en engelsk stemme (iOS/Windows pleier å ha flere)
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(v => v.lang.startsWith('en'));
        if (englishVoice) {
            utterance.voice = englishVoice;
        }
        
        window.speechSynthesis.speak(utterance);
    },

    // --- Admin Funksjoner ---
    openAdmin() {
        if (!this.currentUser) return;
        document.getElementById('admin-lifetime').innerText = this.lifetimeRobux;
        document.getElementById('admin-current').innerText = this.robuxBalance;
        document.getElementById('admin-modal').classList.remove('hidden');
    },

    closeAdmin() {
        document.getElementById('admin-modal').classList.add('hidden');
    },

    payoutRobux() {
        const input = document.getElementById('payout-amount');
        const amount = parseInt(input.value);
        
        if (isNaN(amount) || amount <= 0) {
            alert("Skriv inn et gyldig tall");
            return;
        }
        
        if (amount > this.robuxBalance) {
            alert("Du kan ikke utbetale mer enn hun har på saldoen!");
            return;
        }

        this.robuxBalance -= amount;
        this.updateRobuxDisplay();
        this.saveProgress();
        
        alert("Utbetaling registrert! Saldo er nå: " + this.robuxBalance);
        input.value = '';
        this.closeAdmin();
    }
};

// Start appen når DOM er lastet
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
// Eksporter for bruk i HTML (onclick)
window.app = app;
