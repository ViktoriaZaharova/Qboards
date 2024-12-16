// активная ссылка меню
$('.menu li a').each(function () {
  let location = window.location.href;
  let link = this.href;
  if (location === link) {
      $(this).addClass('active');
  }
});
// end

// mobile menu
$('.btn-filter').on('click', function () {
  $('.filter-wrapper').fadeToggle();
  $('body').toggleClass('no-scroll');
});
$('.btn-filter-close').on('click', function (e) {
  e.preventDefault();
  $('.filter-wrapper').fadeOut();
  $('body').removeClass('no-scroll');
});

$('.btn-toggle-menu').on('click', function (e) {
  e.preventDefault();
  $('.sidebar').fadeToggle();
  $('body').toggleClass('no-scroll');
});

$('.sidebar-menu__close').on('click', function (e) {
  e.preventDefault();
  $('.sidebar').fadeOut();
  $('body').removeClass('no-scroll');
});
// end

// tables
$('#example-table1').DataTable({
  select: true,
  info: false,
  scrollCollapse: true,
  scrollX: 'auto',
  language: {
    search: '',
    url: 'js/ru.json',
    paginate: {
      previous: '',
      next: ''
    }
  },
  layout: {
    topStart: {
      pageLength: true,
      paging: {
        firstLast: false,
      },
    },
    topEnd: {
      search: {
        placeholder: 'Поиск'
      }
    },
    bottomStart: null,
    bottomEnd: null
  },

  initComplete: function () {
    this.api()
      .columns()
      .every(function () {
        var column = this;

        // Создание выпадающего списка select и обработчика событий
        var select = $('<select class="select-my"><option value="Поиск">Поиск</option></select>')
          .appendTo($(column.footer()).empty())
          .on('change', function () {
            column
              .search($(this).val(), { exact: true })
              .draw();
          });

        // Добавление списка уникальных значений в options
        column
          .data()
          .unique()
          .sort()
          .each(function (d, j) {
            select.append('<option value="' + d + '">' + d + '</option>');
          });
      });
  }

});

$('#example-table2').DataTable({
  select: false,
  info: false,
  language: {
    search: '',
    url: 'js/ru.json'
  },

  ordering: false,
  layout: false,
  paging: false,
  scrollCollapse: true,
  scrollY: '340px'
});

$('#example-table3').DataTable({
  select: false,
  info: false,
  language: {
    search: '',
    url: 'js/ru.json'
  },

  // ordering: false,
  layout: false,
  paging: false,
  scrollCollapse: true,
  scrollX: 'auto',
});

$('#example-table4').DataTable({
  select: true,
  info: false,
  scrollCollapse: true,
  scrollX: 'auto',
  language: {
    search: '',
    url: 'js/ru.json',
    paginate: {
      previous: '',
      next: ''
    }
  },
  layout: {
    topStart: {
      pageLength: true,
    },
    topEnd: {
      search: {
        placeholder: 'Поиск'
      }
    },
    bottomStart: null,
    bottomEnd: null
  },

});

$('#example-table5').DataTable({
  select: true,
  info: false,
  scrollCollapse: true,
  scrollX: 'auto',
  language: {
    search: '',
    url: 'js/ru.json',
    paginate: {
      previous: '',
      next: ''
    }
  },
  layout: {
    topStart: {
      pageLength: true,
    },
    topEnd: {
      search: {
        placeholder: 'Поиск'
      }
    },
    bottomStart: null,
    bottomEnd: null
  },

});

// calendar
$(function () {
  //Сменим язык календаря на русский
  $.datepicker.setDefaults(
    {
      closeText: 'Закрыть',
      prevText: '',
      currentText: 'Сегодня',
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
      dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      weekHeader: 'Не',
      dateFormat: 'dd.mm.yy',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
    });

});
$(".datepicker1").datepicker();

