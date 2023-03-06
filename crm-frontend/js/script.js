(function () {
  // Создаем шапку
  function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';

    return header;
  }

  // Создаем логотип
  function createLogo() {
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'header__logo';
    link.innerHTML = `<svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#9873FF" />
        <path
          d="M17.2617 29.082C17.2617 30.0898 16.9102 30.8574 16.207 31.3848C15.5098 31.9121 14.4639 32.1758 13.0693 32.1758C12.3545 32.1758 11.7451 32.126 11.2412 32.0264C10.7373 31.9326 10.2656 31.792 9.82617 31.6045V29.3896C10.3242 29.624 10.8838 29.8203 11.5049 29.9785C12.1318 30.1367 12.6826 30.2158 13.1572 30.2158C14.1299 30.2158 14.6162 29.9346 14.6162 29.3721C14.6162 29.1611 14.5518 28.9912 14.4229 28.8623C14.2939 28.7275 14.0713 28.5781 13.7549 28.4141C13.4385 28.2441 13.0166 28.0479 12.4893 27.8252C11.7334 27.5088 11.1768 27.2158 10.8193 26.9463C10.4678 26.6768 10.21 26.3691 10.0459 26.0234C9.8877 25.6719 9.80859 25.2412 9.80859 24.7314C9.80859 23.8584 10.1455 23.1846 10.8193 22.71C11.499 22.2295 12.46 21.9893 13.7021 21.9893C14.8857 21.9893 16.0371 22.2471 17.1562 22.7627L16.3477 24.6963C15.8555 24.4854 15.3955 24.3125 14.9678 24.1777C14.54 24.043 14.1035 23.9756 13.6582 23.9756C12.8672 23.9756 12.4717 24.1895 12.4717 24.6172C12.4717 24.8574 12.5977 25.0654 12.8496 25.2412C13.1074 25.417 13.667 25.6777 14.5283 26.0234C15.2959 26.334 15.8584 26.624 16.2158 26.8936C16.5732 27.1631 16.8369 27.4736 17.0068 27.8252C17.1768 28.1768 17.2617 28.5957 17.2617 29.082ZM21.9287 26.6562L23.0977 25.1621L25.8486 22.1738H28.8721L24.9697 26.4365L29.1094 32H26.0156L23.1855 28.0186L22.0342 28.9414V32H19.3535V18.3242H22.0342V24.4238L21.8936 26.6562H21.9287ZM35.9824 21.9893C37.1426 21.9893 38.0508 22.4434 38.707 23.3516C39.3633 24.2539 39.6914 25.4932 39.6914 27.0693C39.6914 28.6924 39.3516 29.9492 38.6719 30.8398C37.998 31.7305 37.0781 32.1758 35.9121 32.1758C34.7578 32.1758 33.8525 31.7568 33.1963 30.9189H33.0117L32.5635 32H30.5156V18.3242H33.1963V21.5059C33.1963 21.9102 33.1611 22.5576 33.0908 23.4482H33.1963C33.8232 22.4756 34.752 21.9893 35.9824 21.9893ZM35.1211 24.1338C34.459 24.1338 33.9756 24.3389 33.6709 24.749C33.3662 25.1533 33.208 25.8242 33.1963 26.7617V27.0518C33.1963 28.1064 33.3516 28.8623 33.6621 29.3193C33.9785 29.7764 34.4766 30.0049 35.1562 30.0049C35.707 30.0049 36.1436 29.7529 36.4658 29.249C36.7939 28.7393 36.958 28.001 36.958 27.0342C36.958 26.0674 36.7939 25.3438 36.4658 24.8633C36.1377 24.377 35.6895 24.1338 35.1211 24.1338ZM41.5283 30.7432C41.5283 30.251 41.6602 29.8789 41.9238 29.627C42.1875 29.375 42.5713 29.249 43.0752 29.249C43.5615 29.249 43.9365 29.3779 44.2002 29.6357C44.4697 29.8936 44.6045 30.2627 44.6045 30.7432C44.6045 31.2061 44.4697 31.5723 44.2002 31.8418C43.9307 32.1055 43.5557 32.2373 43.0752 32.2373C42.583 32.2373 42.2021 32.1084 41.9326 31.8506C41.6631 31.5869 41.5283 31.2178 41.5283 30.7432Z"
          fill="white"
        />
      </svg>`;

    return link;
  }

  // Создаем форму поиска
  function createFormSearch() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    form.className = 'header__form';
    input.className = 'header__input';
    input.placeholder = 'Введите запрос';

    form.append(input);

    return { form, input };
  }

  // Создаем контейнер для таллицы
  function createTableContainer() {
    const tableContainer = document.createElement('div');
    const tableWrapper = document.createElement('div');
    tableContainer.className = 'table__container table';
    tableWrapper.className = 'table__wrapper';

    tableContainer.append(tableWrapper);
    return { tableContainer, tableWrapper };
  }

  // Создаем заголовок приложения
  function createTitle() {
    const title = document.createElement('h1');
    title.className = 'table__title';
    title.textContent = 'Клиенты';

    return title;
  }

  // Создаем таблицу
  function createTable() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const trow = document.createElement('tr');
    const id = document.createElement('th');
    const btnId = document.createElement('button');
    const btnArrowId = document.createElement('span');
    const fullName = document.createElement('th');
    const btnFullName = document.createElement('button');
    const btnArrowName = document.createElement('span');
    const spanSortFullName = document.createElement('span');
    const dateCreate = document.createElement('th');
    const btnDateCreate = document.createElement('button');
    const btnArrowCreate = document.createElement('span');
    const change = document.createElement('th');
    const btnChange = document.createElement('button');
    const btnArrowChange = document.createElement('span');
    const contacts = document.createElement('th');
    const btnContacts = document.createElement('button');
    const actions = document.createElement('th');
    const btnActions = document.createElement('button');

    table.className = 'table__header';
    trow.className = 'table__header_row';
    id.className = 'table__header_cell-id';
    fullName.className = 'table__header_cell-full-name';
    dateCreate.className = 'table__header_cell-create';
    change.className = 'table__header_cell-change';
    contacts.className = 'table__header_cell-contacts';
    btnId.textContent = 'ID';
    btnId.className = 'btn-reset table__btn table__btn-id';
    btnArrowId.className = 'table__arrow-id';
    btnFullName.textContent = 'Фамилия Имя Отчество';
    btnFullName.className = 'btn-reset table__btn table__btn-full-name';
    btnArrowName.className = 'table__arrow-full-name';
    spanSortFullName.textContent = 'А-Я';
    spanSortFullName.className = 'btn-reset table__btn-sort-full-name';
    btnDateCreate.textContent = 'Дата и время создания';
    btnDateCreate.className = 'btn-reset table__btn table__btn-create';
    btnArrowCreate.className = 'table__arrow-create';
    btnChange.textContent = 'Последние изменения';
    btnChange.className = 'btn-reset table__btn table__btn-change';
    btnArrowChange.className = 'table__arrow-change';
    btnContacts.textContent = 'Контакты';
    btnContacts.className = 'btn-reset table__btn';
    actions.className = 'table__header_cell-action';
    btnActions.textContent = 'Действия';
    btnActions.className = 'btn-reset table__btn';

    // Добавляем кнопки в тег th
    id.append(btnId);
    id.append(btnArrowId);
    fullName.append(btnFullName);
    fullName.append(btnArrowName);
    fullName.append(spanSortFullName);
    dateCreate.append(btnDateCreate);
    dateCreate.append(btnArrowCreate);
    change.append(btnChange);
    change.append(btnArrowChange);

    contacts.append(btnContacts);
    actions.append(btnActions);

    // Добавляем th в tr
    trow.append(id);
    trow.append(fullName);
    trow.append(dateCreate);
    trow.append(change);
    trow.append(contacts);
    trow.append(actions);

    thead.append(trow);

    table.append(thead);

    return table;
  }

  // Создаем тело таблицы
  function createTableBody() {
    const tbody = document.createElement('tbody');
    tbody.className = 'table__body';

    return tbody;
  }

  // Кнопка добавления нового клиента
  function createBtnAddClient() {
    const btn = document.createElement('button');
    const decor = document.createElement('span');
    btn.className = 'btn-reset btn-add__client';
    btn.textContent = 'Добавить клиента';
    decor.className = 'btn-add__decor';
    decor.innerHTML = `<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z" fill="#9873FF"/>
    </svg>
    `;

    btn.append(decor);

    return btn;
  }

  // Получаем полное ФИО
  function getFullName(data) {
    if (data.lastName === '') {
      return `${data.surname[0].toUpperCase()}${data.surname
        .slice(1)
        .toLowerCase()} ${data.name[0].toUpperCase()}${data.name
        .slice(1)
        .toLowerCase()}`;
    } else {
      return `${data.surname[0].toUpperCase()}${data.surname
        .slice(1)
        .toLowerCase()} ${data.name[0].toUpperCase()}${data.name
        .slice(1)
        .toLowerCase()} ${data.lastName[0].toUpperCase()}${data.lastName
        .slice(1)
        .toLowerCase()}`;
    }
  }

  // Получаем дату
  function getDate(dateValue) {
    const date = dateValue
      .match(/\d{4}-\d{2}-\d{2}/gm)
      .toString()
      .split('-')
      .reverse()
      .join('.');

    return date;
  }

  // Получаем время
  function getTime(timeValue) {
    const time = timeValue.match(/\d{2}:\d{2}/gm).toString();

    return time;
  }

  // Создаем элемент клиента
  function createItem(data, handlers) {
    const userRow = document.createElement('tr');
    const idUser = document.createElement('td');
    const fullName = document.createElement('td');
    const dateCreate = document.createElement('td');
    const dateFullCreate = document.createElement('span');
    const dateTimeCreate = document.createElement('span');
    const lastEdit = document.createElement('td');
    const lastEditDate = document.createElement('span');
    const lastEditTime = document.createElement('span');
    const contacts = document.createElement('td');
    const action = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    userRow.className = 'table__user user';
    idUser.className = 'user__id';
    idUser.textContent = data.id;
    fullName.className = 'user__fullName';
    fullName.textContent = getFullName(data);
    dateCreate.className = 'user__create create-date';
    dateFullCreate.className = 'create-date__full';
    dateFullCreate.textContent = getDate(data.createdAt);
    dateTimeCreate.className = 'create-date__time';
    dateTimeCreate.textContent = getTime(data.createdAt);
    lastEdit.className = 'user__edit edit-user';
    lastEditDate.className = 'edit-user__date';
    lastEditDate.textContent = getDate(data.updatedAt);
    lastEditTime.className = 'edit-user__time';
    lastEditTime.textContent = getTime(data.updatedAt);
    contacts.className = 'user__contacts';
    action.className = 'user__action action';
    editButton.className = 'btn-reset action__btn action__btn-change';
    editButton.textContent = 'Изменить';
    deleteButton.className = 'btn-reset action__btn action__btn-dalete';
    deleteButton.textContent = 'Удалить';

    deleteButton.addEventListener('click', () => {
      document
        .getElementById('container')
        .append(deleteUserModal(handlers, data));
    });

    if (data.contacts.length > 5) {
      contacts.classList.add('user__contacts-active');
    } else {
      contacts.classList.remove('user__contacts-active');
    }

    userRow.append(idUser);
    userRow.append(fullName);
    userRow.append(dateCreate);
    dateCreate.append(dateFullCreate);
    dateCreate.append(dateTimeCreate);
    userRow.append(lastEdit);
    lastEdit.append(lastEditDate);
    lastEdit.append(lastEditTime);
    userRow.append(contacts);
    userRow.append(action);
    action.append(editButton);
    action.append(deleteButton);

    editButton.addEventListener('click', () => {
      handlers.editUserModal(data);
    });

    let currentId = 1;

    for (let i = 0; i < data.contacts.length; i++) {
      contacts.append(
        createContactElement(data.contacts[i], currentId, data.id)
      );
      currentId++;
    }

    return userRow;
  }

  // Создаем элемент контакта
  function createContactElement(contact, currentId, userId) {
    const contactItem = document.createElement('span');
    contactItem.className = 'user__contact__item';

    const type = contact.type;

    switch (type) {
      case 'Телефон':
        contactItem.classList.add('user__contact__item-tel');
        contactItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <circle cx="8" cy="8" r="8" fill="#9873FF"/>
        <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
        </g>
        </svg>
        `;
        break;
      case 'Email':
        contactItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
        </svg>
        `;
        break;
      case 'Vk':
        contactItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97312 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92644 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70111C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
        </g>
        </svg>
        `;
        break;
      case 'Facebook':
        contactItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
        </g>
        </svg>
        `;
        break;
      case 'Другое':
        contactItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
        </svg>
        `;
        break;
    }

    setTimeout(() => {
      createTooltip(contact, currentId, contactItem, userId);
    }, 1);

    return contactItem;
  }

  // Создаем тултип
  function createTooltip(contact, selectorId, item, userId) {
    item.id = `${userId}__${selectorId}`;
    tippy(document.getElementById(`${userId}__${selectorId}`), {
      content: `${contact.type}: ${contact.value}`,
      delay: [200, 200],
    });
  }

  // Создаем модальное окно
  function createModalAddClient(handlers, editUser, dataUser) {
    // Создаем контейнер и заголовок
    const container = document.createElement('div');
    const wrapper = document.createElement('div');
    const title = document.createElement('h2');
    const idUser = document.createElement('span');

    container.className = 'modal__container modal';
    wrapper.className = 'modal__wrapper';
    title.className = 'modal__title';
    idUser.className = 'modal__id';
    idUser.textContent = `ID: ${dataUser.id}`;

    // Создаем форму
    const form = document.createElement('form');

    form.className = 'modal__form';
    form.id = 'modal__form';

    // Поля ввода ФИО
    const surnameWrapper = document.createElement('div');
    const surnameInput = document.createElement('input');
    const nameWrapper = document.createElement('div');
    const nameInput = document.createElement('input');
    const lastNameWrapper = document.createElement('div');
    const lastNameInput = document.createElement('input');

    surnameWrapper.className =
      'modal__input-wrapper modal__input-wrapper--surname';
    nameWrapper.className = 'modal__input-wrapper modal__input-wrapper--name';

    lastNameWrapper.className =
      'modal__input-wrapper modal__input-wrapper--last-name';
    surnameInput.className = 'modal__input';
    surnameInput.value = '';
    surnameInput.id = 'modal__input--surname';
    nameInput.className = 'modal__input modal__input--name';
    nameInput.value = '';
    nameInput.id = 'modal__input--name';

    lastNameInput.className = 'modal__input modal__input--last-name';
    lastNameInput.value = '';
    lastNameInput.id = 'modal__input--last-name';

    // Поле "добавить контакт" в форме
    const contacts = document.createElement('div');
    const list = document.createElement('ul');
    const btnAddContact = document.createElement('button');
    const decor = document.createElement('span');

    const listActive = 'contacts__list--active';
    const contactsActive = 'contacts--active';

    contacts.className = 'modal__contacts contacts';
    list.className = 'list-reset contacts__list';
    btnAddContact.textContent = 'Добавить контакт';
    btnAddContact.className = 'btn-reset contacts__btn';
    decor.className = 'contacts__btn-decor';

    btnAddContact.append(decor);
    // Создаем кнопку "сохранить", "отмена", крестик
    const btnSave = document.createElement('button');
    const btnCancel = document.createElement('button');
    const btnClose = document.createElement('button');
    const lineOne = document.createElement('span');
    const lineTwo = document.createElement('span');

    btnSave.textContent = 'Сохранить';
    btnSave.className = 'btn-reset modal__save';
    btnCancel.textContent = 'Отмена';
    btnCancel.className = 'btn-reset modal__cancel';
    btnClose.className = 'btn-reset modal__close close';
    lineOne.className = 'close__line close__line-one';
    lineTwo.className = 'close__line close__line-two';

    // Изменяем форму в зависимости от действия
    if (editUser) {
      title.textContent = 'Изменить данные';
      btnCancel.textContent = 'Удалить клиента';
      wrapper.append(idUser);

      for (const contact of dataUser.contacts) {
        list.append(createItemContact(contacts, btnAddContact, contact));
      }

      surnameInput.value = `${dataUser.surname[0].toUpperCase()}${dataUser.surname
        .slice(1)
        .toLowerCase()}`;

      nameInput.value = `${dataUser.name[0].toUpperCase()}${dataUser.name
        .slice(1)
        .toLowerCase()}`;

      lastNameInput.value =
        dataUser.lastName.length > 1
          ? `${dataUser.lastName[0].toUpperCase()}${dataUser.lastName
              .slice(1)
              .toLowerCase()}`
          : '';

      if (dataUser.contacts.length !== 0) {
        list.classList.add(listActive);
        contacts.classList.add(contactsActive);
      }

      wrapper.style.minHeight = '400px';

      if (dataUser.contacts.length === 1) {
        wrapper.classList.add('modal__wrapper-one');
      } else if (dataUser.contacts.length > 1) {
        wrapper.classList.remove('modal__wrapper-one');
        wrapper.classList.add('modal__wrapper-two');
      }
    } else {
      title.textContent = 'Новый клиент';
    }

    // Назначение кнопки "Сохранить" в зависимости от ситуации
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        name: nameInput.value.toLowerCase().trim(),
        surname: surnameInput.value.toLowerCase().trim(),
        lastName: lastNameInput.value.toLowerCase().trim(),
        contacts: getArrayContactData(),
      };

      editUser
        ? handlers.onEdit(data, container, dataUser.id)
        : handlers.onSave(data, container);

      validation();
    });

    btnAddContact.addEventListener('click', (e) => {
      e.preventDefault();

      const contactsItem = document.querySelectorAll('.contacts__item');

      if (contactsItem.length > 0) {
        wrapper.classList.remove('modal__wrapper-one');
        wrapper.classList.add('modal__wrapper-two');
      } else {
        wrapper.classList.add('modal__wrapper-one');
      }

      if (contactsItem.length < 10) {
        contacts.classList.add(contactsActive);
        list.classList.add(listActive);
        list.append(createItemContact(contacts, btnAddContact));
      }

      if (contactsItem.length == 9) {
        btnAddContact.remove();
      }

      if (contactsItem.length >= 4) {
        list.classList.add('contacts__list-max');
      } else if (contactsItem.length < 6) {
        list.classList.remove('contacts__list-max');
      }
    });

    btnClose.addEventListener('click', () => {
      container.classList.toggle('modal__container-active');
      list.innerHTML = '';
      list.classList.remove(listActive);
      handlers.onClose(container);
    });

    btnCancel.addEventListener('click', (e) => {
      e.preventDefault();

      if (editUser) {
        container.remove();
        document
          .getElementById('container')
          .append(deleteUserModal(handlers, dataUser));
      } else {
        container.classList.toggle('modal__container-active');
        list.innerHTML = '';
        list.classList.remove(listActive);
        handlers.onClose(container);
      }
    });

    container.append(wrapper);
    wrapper.append(title);
    wrapper.append(form);
    wrapper.append(btnClose);
    btnClose.append(lineOne);
    btnClose.append(lineTwo);
    surnameWrapper.append(surnameInput);
    nameWrapper.append(nameInput);
    lastNameWrapper.append(lastNameInput);
    form.append(surnameWrapper);
    form.append(nameWrapper);
    form.append(lastNameWrapper);
    form.append(contacts);
    form.append(btnSave);
    form.append(btnCancel);

    contacts.append(list);
    contacts.append(btnAddContact);

    return container;
  }

  // Валидация
  function validation() {
    const validation = new JustValidate('#modal__form', {
      errorFieldCssClass: 'is-invalid',
    });

    validation
      .addField('#modal__input--last-name', [
        {
          rule: 'required',
          errorMessage: 'Обязательное поле',
        },
      ])
      .addField('#modal__input--name', [
        {
          rule: 'required',
          errorMessage: 'Обязательное поле',
        },
      ]);
  }

  // Создаем item контакта
  function createItemContact(contacts, btnAddContact, contact = false) {
    // Создаем поля с контактами в форме
    const item = document.createElement('li');
    const select = document.createElement('select');
    const optionTel = document.createElement('option');
    const optionOther = document.createElement('option');
    const optionEmail = document.createElement('option');
    const optionVk = document.createElement('option');
    const optionFb = document.createElement('option');
    const valueOption = document.createElement('input');
    const deleteValue = document.createElement('button');

    select.className = 'contacts__select';
    item.className = 'contacts__item';
    optionTel.textContent = 'Телефон';
    optionTel.className = 'contacts__option';
    optionEmail.textContent = 'Email';
    optionEmail.className = 'contacts__option';
    optionVk.textContent = 'Vk';
    optionVk.className = 'contacts__option';
    optionFb.textContent = 'Facebook';
    optionFb.className = 'contacts__option';
    optionOther.textContent = 'Другое';
    optionOther.className = 'contacts__option';
    valueOption.placeholder = 'Введите данные контакта';
    valueOption.className = 'contacts__value';
    valueOption.id = 'contacts__value';
    deleteValue.className = 'btn-reset contacts__delete';
    deleteValue.id = 'contacts__delete';

    deleteValue.addEventListener('click', (e) => {
      e.preventDefault();

      valueOption.value === '' ? item.remove() : (valueOption.value = '');
      if (document.querySelectorAll('.contacts__item').length === 0) {
        document.querySelector('.modal__wrapper').style.top = '168px';
        document
          .querySelector('.contacts__list')
          .classList.remove('contacts__list--active');
        document
          .querySelector('.contacts')
          .classList.remove('contacts--active');
      }

      if (document.querySelectorAll('.contacts__item').length === 1) {
        document.querySelector('.modal__wrapper').style.top = '139px';
      }

      if (document.querySelectorAll('.contacts__item').length < 10) {
        contacts.append(btnAddContact);
      }
    });

    item.append(select);
    item.append(valueOption);
    item.append(deleteValue);
    select.append(optionTel);
    select.append(optionEmail);
    select.append(optionVk);
    select.append(optionFb);
    select.append(optionOther);

    if (!contact) {
      select.value = '';
      valueOption.value = '';
      Inputmask('+7 (999) 999-99-99').mask(valueOption);
    } else {
      select.value = contact.type;
      valueOption.value = contact.value;
      if (select.value === 'Телефон')
        Inputmask('+7 (999) 999-99-99').mask(valueOption);
    }

    select.addEventListener('change', () => {
      if (select.value === 'Телефон') {
        Inputmask('+7 (999) 999-99-99').mask(valueOption);
      } else {
        Inputmask.remove(valueOption);
      }
      valueOption.value = '';
    });

    tippy('#contacts__delete', {
      content: `Удалить контакт`,
    });

    // tippy(document.getElementById('contacts__delete'), {
    //   content: `Удалить контакт`,
    // });

    // setTimeout(console.log(document.getElementById('contacts__delete')), 100);
    // const instanse = tippy('#contacts__delete', {
    //   content: `${
    //     valueOption.value.length === 0 ? 'Удалить контакт' : 'Очистить контакт'
    //   }`,
    // });

    // console.log(instanse);
    // deleteValue.addEventListener('click', () => instanse.destroy());

    const choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });

    return item;
  }

  // Создаем массив с контактными данными
  function getArrayContactData() {
    const contact = [];
    const typeContact = document.querySelectorAll(
      '.choices__list.choices__list--single'
    );
    const valueContact = document.querySelectorAll('.contacts__value');
    function Contact(type, value) {
      const contact = {
        type: type,
        value: value,
      };
      return contact;
    }
    for (let i = 0; i < typeContact.length; i++)
      contact.push(Contact(typeContact[i].textContent, valueContact[i].value));
    return contact;
  }

  // Создаем окно удаления
  function deleteUserModal(handlers, data) {
    const modal = document.createElement('div');
    const modalWrapper = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const btnClose = document.createElement('button');
    const lineOne = document.createElement('span');
    const lineTwo = document.createElement('span');
    const deleteUser = document.createElement('button');
    const cancel = document.createElement('button');

    modal.className = 'modal__delete delete';
    modalWrapper.className = 'delete__wrapper';
    title.className = 'delete__title title';
    title.textContent = 'Удалить клиента';
    description.className = 'delete__descr';
    description.textContent =
      'Вы действительно хотите удалить данного клиента?';
    btnClose.className = 'btn-reset modal__close close delete__close';
    lineOne.className = 'close__line close__line-one';
    lineTwo.className = 'close__line close__line-two';
    deleteUser.className = 'btn-reset delete__btn';
    deleteUser.textContent = 'Удалить';
    cancel.className = 'btn-reset delete__cancel';
    cancel.textContent = 'Отмена';

    modal.append(modalWrapper);
    modalWrapper.append(title);
    modalWrapper.append(description);
    modalWrapper.append(btnClose);
    modalWrapper.append(deleteUser);
    modalWrapper.append(cancel);
    btnClose.append(lineOne);
    btnClose.append(lineTwo);

    deleteUser.addEventListener('click', () => {
      handlers.onDelete(data, modal);
    });

    btnClose.addEventListener('click', () => {
      handlers.onClose(modal);
    });

    cancel.addEventListener('click', () => {
      handlers.onClose(modal);
    });

    return modal;
  }

  // Сортировка
  async function sorting(prop, userItem, tbody, handlers, data, dir = false) {
    const copyList = [...data];
    tbody.innerHTML = '';
    let sort = null;
    Object.keys(copyList[0]).map((el) =>
      prop === 'name' && el === prop
        ? (sort = copyList.sort((a, b) => {
            let fullNameA = a['surname'] + a['name'] + a['lastName'];
            let fullNameB = b['surname'] + b['name'] + b['lastName'];
            if (!dir ? fullNameA < fullNameB : fullNameA > fullNameB) return -1;
          }))
        : (sort = copyList.sort((a, b) => {
            if (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) return -1;
          }))
    );

    render(tbody, userItem, handlers, sort);
  }

  // Функция отрисовки таблицы с клиентами
  async function render(tbody, userItem, handlers, data) {
    tbody.innerHTML = '';
    data.map((item) => tbody.append(userItem(item, handlers)));
  }

  // Получаем данные клиентов
  async function getDataClients() {
    const response = await fetch('http://localhost:3000/api/clients');
    const data = await response.json();

    return data;
  }

  async function filter(tbody, userItem, handlers, data, value) {
    let result = data.filter((elem) => {
      for (const user in elem) {
        if (user === 'contacts') {
          for (const contact of elem.contacts) {
            if (contact.value.includes(value)) return true;
          }
        }
        if (
          `${elem['surname']} ${elem['name']} ${elem['lastName']}`.includes(
            value
          ) ||
          elem[user].includes(value)
        ) {
          return true;
        }
      }
    });

    render(tbody, userItem, handlers, result);
  }

  async function createApp() {
    const container = document.getElementById('container');
    const logo = createLogo();
    const search = createFormSearch();
    const header = createHeader();
    const tableContainer = createTableContainer();
    const title = createTitle();
    const table = createTable();
    const tbody = createTableBody();
    const btnAddUser = createBtnAddClient();
    const userItem = createItem;
    const dataClients = await getDataClients();
    const handlers = {
      onClose(element) {
        element.remove();
      },
      async editUserModal(data) {
        const response = await fetch(
          `http://localhost:3000/api/clients/${data.id}`
        );

        const dataUser = await response.json();

        container.append(createModalAddClient(handlers, true, dataUser));
      },
      async onSave(data, element) {
        const response = await fetch('http://localhost:3000/api/clients', {
          method: 'POST',
          body: JSON.stringify({
            name: data.name,
            surname: data.surname,
            lastName: data.lastName,
            contacts: data.contacts,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        tbody.innerHTML = '';
        render(tbody, userItem, handlers, await getDataClients());
        element.remove();
      },
      async onEdit(data, element, id) {
        await fetch(`http://localhost:3000/api/clients/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            name: data.name,
            surname: data.surname,
            lastName: data.lastName,
            contacts: data.contacts,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        tbody.innerHTML = '';
        render(tbody, userItem, handlers, await getDataClients());

        element.remove();
      },
      async onDelete(data, element) {
        await fetch(`http://localhost:3000/api/clients/${data.id}`, {
          method: 'DELETE',
        });
        this.onClose(element);

        tbody.innerHTML = '';

        const response = await fetch('http://localhost:3000/api/clients');
        const dataUser = await response.json();

        for (const item of dataUser) tbody.append(userItem(item, handlers));
      },
    };
    const userNull = {
      name: '',
      surname: '',
      lastName: '',
      id: '',
    };

    render(tbody, userItem, handlers, dataClients);

    search.input.addEventListener('input', () => {
      setTimeout(async () => {
        filter(
          tbody,
          userItem,
          handlers,
          await getDataClients(),
          search.input.value.toLowerCase()
        );
      }, 300);
    });

    container.append(header);
    header.append(logo);
    header.append(search.form);
    container.append(tableContainer.tableContainer);
    container.append(btnAddUser);
    tableContainer.tableWrapper.append(title);
    tableContainer.tableWrapper.append(table);
    tableContainer.tableWrapper.append(tbody);

    btnAddUser.addEventListener('click', () => {
      container.append(createModalAddClient(handlers, false, userNull));
    });

    let dirId = false;

    document
      .querySelector('.table__btn-id')
      .addEventListener('click', async () => {
        const arrow = document.querySelector('.table__arrow-id');
        dirId
          ? arrow.classList.add('table__arrow-id-active')
          : arrow.classList.remove('table__arrow-id-active');
        sorting('id', userItem, tbody, handlers, await getDataClients(), dirId);
        dirId = !dirId;
      });

    let dirName = false;

    document
      .querySelector('.table__btn-full-name')
      .addEventListener('click', async () => {
        const arrow = document.querySelector('.table__arrow-full-name');
        !dirName
          ? arrow.classList.add('table__arrow-full-name-active')
          : arrow.classList.remove('table__arrow-full-name-active');
        sorting(
          'name',
          userItem,
          tbody,
          handlers,
          await getDataClients(),
          dirName
        );
        dirName = !dirName;
      });

    let dirCreate = false;

    document
      .querySelector('.table__btn-create')
      .addEventListener('click', async () => {
        const arrow = document.querySelector('.table__arrow-create');
        dirCreate
          ? arrow.classList.add('table__arrow-create-active')
          : arrow.classList.remove('table__arrow-create-active');
        sorting(
          'createdAt',
          userItem,
          tbody,
          handlers,
          await getDataClients(),
          dirCreate
        );
        dirCreate = !dirCreate;
      });

    let dirChange = false;

    document
      .querySelector('.table__btn-change')
      .addEventListener('click', async () => {
        const arrow = document.querySelector('.table__arrow-change');
        dirChange
          ? arrow.classList.add('table__arrow-change-active')
          : arrow.classList.remove('table__arrow-change-active');
        sorting(
          'updatedAt',
          userItem,
          tbody,
          handlers,
          await getDataClients(),
          dirChange
        );
        dirChange = !dirChange;
      });
  }

  window.createApp = createApp;
})();
