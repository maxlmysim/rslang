export enum CSSClass {
  authorization = 'authorization',
  authorizationTitle = 'authorization__title',
  authorizationInput = 'authorization__input',
  authorizationInputEmail = 'authorization__input-email',
  authorizationInputPassword = 'authorization__input-password',
  authorizationButton = 'authorization__button',
  warning = 'warning',
  warningMessage = 'warning-message',
  gamesPage = 'games-page',
  gamesPageGame = 'games-page__game',
  gameAudio = 'game-audio',
  gameAudioAnswer = 'game-audio__answer',
  gameAudioAnswers = 'game-audio__answers',
  gameAudioHeader = 'game-audio__header',
  gameAudioButton = 'game-audio__button',
  gameAudioButtonVoice = 'game-audio__button-voice',
  gameAudioBlockButtons = 'game-audio__block-buttons',
  gameAudioBlockButtonsStart = 'game-audio__block-buttons__start',
  gameAudioBlockButtonsSelect = 'game-audio__block-buttons__select',
  gameAudioBlockButtonsFieldset = 'game-audio__block-buttons__fieldset',
  gameAudioBlockButtonsFieldsetBlock = 'game-audio__block-buttons__fieldset-block',
  gameAudioTitle = 'game-audio__title',
  gameAudioDescription = 'game-audio__description',
  gameAudioDescriptionBlock = 'game-audio__description-block',
  gameAudioDescriptionControl = 'game-audio__description-control',
  gamesPageGameName = 'games-page__game-name',
}

export enum AuthorizationText {
  mistakeUser = 'Пользователь с таким email не найден!',
  invalidEmail = 'Некорректный email!',
  incorrectPassword = 'Неверный пароль!',
  shortPassword = 'Пароль должен быть не менее 8 символов!',
  existsEmail = 'Такой email уже зарегистрирован',
}

export enum AudioGameText {
  name = 'аудиовызов',
  description = '«Аудиовызов» - это тренировка, которая улучшает восприятие речи на слух.',
  descriptionControlMouse = 'Используйте мышь, чтобы выбрать.',
  descriptionControlKey = 'Используйте цифровые клавиши от 1 до 5 для выбора ответа',
  descriptionControlReplayingVoice = 'Используйте пробел для повторного звучания слова',
  descriptionControlHint = 'Используйте клавишу Enter для подсказки или для перехода к следующему слову',
  startButton = 'Начать',

}
