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
  paging: true,
  scrollCollapse: true,
  scrollX: true, // Исправлено на true
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
  initComplete: function () {
    var table = this.api();

    // Удаление уже существующей строки фильтров, если она есть, чтобы избежать дублирования
    table.table().container().querySelectorAll('tr.filters').forEach(row => row.remove());

    // Добавление строки для поиска под заголовками колонок
    var filtersRow = $('<tr class="filters"></tr>').appendTo($(table.table().header()).parent());

    table.columns().every(function () {
      var column = this;

      // Создание выпадающего списка select и обработчика событий
      var select = $('<select class="select-my"><option>Поиск</option></select>')
        .appendTo($('<th></th>').appendTo(filtersRow)) // Добавляем select в новую строку фильтров
        .on('change', function () {
          var val = $(this).val();
          column
            .search(val ? '^' + val + '$' : '', true, false)
            .draw();
        });

      // Добавление списка уникальных значений в options
      column
        .data()
        .unique()
        .sort()
        .each(function (d, j) {
          if (d) { // Условие, чтобы избежать пустых значений
            select.append('<option value="' + d + '">' + d + '</option>');
          }
        });
    });
  }
});

$('#example-table3-1').DataTable({
  select: false,
  info: false,
  language: {
    search: '',
    url: 'js/ru.json'
  },

  // ordering: false,
  layout: false,
  paging: true,
  scrollCollapse: true,
  scrollX: 'auto',
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
  initComplete: function () {
    var table = this.api();

    // Удаление уже существующей строки фильтров, если она есть, чтобы избежать дублирования
    table.table().container().querySelectorAll('tr.filters').forEach(row => row.remove());

    // Добавление строки для поиска под заголовками колонок
    var filtersRow = $('<tr class="filters"></tr>').appendTo($(table.table().header()).parent());

    table.columns().every(function () {
      var column = this;

      // Создание выпадающего списка select и обработчика событий
      var select = $('<select class="select-my"><option>Поиск</option></select>')
        .appendTo($('<th></th>').appendTo(filtersRow)) // Добавляем select в новую строку фильтров
        .on('change', function () {
          var val = $(this).val();
          column
            .search(val ? '^' + val + '$' : '', true, false)
            .draw();
        });

      // Добавление списка уникальных значений в options
      column
        .data()
        .unique()
        .sort()
        .each(function (d, j) {
          if (d) { // Условие, чтобы избежать пустых значений
            select.append('<option value="' + d + '">' + d + '</option>');
          }
        });
    });
  }
});

$('#example-table3-2').DataTable({
  select: false,
  info: false,
  language: {
    search: '',
    url: 'js/ru.json'
  },

  // ordering: false,
  layout: false,
  paging: true,
  scrollCollapse: true,
  scrollX: 'auto',
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
  initComplete: function () {
    var table = this.api();

    // Удаление уже существующей строки фильтров, если она есть, чтобы избежать дублирования
    table.table().container().querySelectorAll('tr.filters').forEach(row => row.remove());

    // Добавление строки для поиска под заголовками колонок
    var filtersRow = $('<tr class="filters"></tr>').appendTo($(table.table().header()).parent());

    table.columns().every(function () {
      var column = this;

      // Создание выпадающего списка select и обработчика событий
      var select = $('<select class="select-my"><option>Поиск</option></select>')
        .appendTo($('<th></th>').appendTo(filtersRow)) // Добавляем select в новую строку фильтров
        .on('change', function () {
          var val = $(this).val();
          column
            .search(val ? '^' + val + '$' : '', true, false)
            .draw();
        });

      // Добавление списка уникальных значений в options
      column
        .data()
        .unique()
        .sort()
        .each(function (d, j) {
          if (d) { // Условие, чтобы избежать пустых значений
            select.append('<option value="' + d + '">' + d + '</option>');
          }
        });
    });
  }
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
  initComplete: function () {
    var table = this.api();

    // Удаление уже существующей строки фильтров, если она есть, чтобы избежать дублирования
    table.table().container().querySelectorAll('tr.filters').forEach(row => row.remove());

    // Добавление строки для поиска под заголовками колонок
    var filtersRow = $('<tr class="filters"></tr>').appendTo($(table.table().header()).parent());

    table.columns().every(function () {
      var column = this;

      // Создание выпадающего списка select и обработчика событий
      var select = $('<select class="select-my"><option>Поиск</option></select>')
        .appendTo($('<th></th>').appendTo(filtersRow)) // Добавляем select в новую строку фильтров
        .on('change', function () {
          var val = $(this).val();
          column
            .search(val ? '^' + val + '$' : '', true, false)
            .draw();
        });

      // Добавление списка уникальных значений в options
      column
        .data()
        .unique()
        .sort()
        .each(function (d, j) {
          if (d) { // Условие, чтобы избежать пустых значений
            select.append('<option value="' + d + '">' + d + '</option>');
          }
        });
    });
  }
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
  initComplete: function () {
    var table = this.api();

    // Удаление уже существующей строки фильтров, если она есть, чтобы избежать дублирования
    table.table().container().querySelectorAll('tr.filters').forEach(row => row.remove());

    // Добавление строки для поиска под заголовками колонок
    var filtersRow = $('<tr class="filters"></tr>').appendTo($(table.table().header()).parent());

    table.columns().every(function () {
      var column = this;

      // Создание выпадающего списка select и обработчика событий
      var select = $('<select class="select-my"><option>Поиск</option></select>')
        .appendTo($('<th></th>').appendTo(filtersRow)) // Добавляем select в новую строку фильтров
        .on('change', function () {
          var val = $(this).val();
          column
            .search(val ? '^' + val + '$' : '', true, false)
            .draw();
        });

      // Добавление списка уникальных значений в options
      column
        .data()
        .unique()
        .sort()
        .each(function (d, j) {
          if (d) { // Условие, чтобы избежать пустых значений
            select.append('<option value="' + d + '">' + d + '</option>');
          }
        });
    });
  }
});

$('#example-table6').DataTable({
  select: true,
  info: false,
  scrollCollapse: true,
  scrollX: 'auto',
  paging: true,
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
  initComplete: function () {
    var table = this.api();

    // Удаление уже существующей строки фильтров, если она есть, чтобы избежать дублирования
    table.table().container().querySelectorAll('tr.filters').forEach(row => row.remove());

    // Добавление строки для поиска под заголовками колонок
    var filtersRow = $('<tr class="filters"></tr>').appendTo($(table.table().header()).parent());

    table.columns().every(function () {
      var column = this;

      // Создание выпадающего списка select и обработчика событий
      var select = $('<select class="select-my"><option>Поиск</option></select>')
        .appendTo($('<th></th>').appendTo(filtersRow)) // Добавляем select в новую строку фильтров
        .on('change', function () {
          var val = $(this).val();
          column
            .search(val ? '^' + val + '$' : '', true, false)
            .draw();
        });

      // Добавление списка уникальных значений в options
      column
        .data()
        .unique()
        .sort()
        .each(function (d, j) {
          if (d) { // Условие, чтобы избежать пустых значений
            select.append('<option value="' + d + '">' + d + '</option>');
          }
        });
    });
  }
});

$('#example-table7').DataTable({
  select: false,
  info: false,
  ordering: false,
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

$('#example-table8').DataTable({
  select: false,
  info: false,
  ordering: false,
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
$(".datepicker1").datepicker({
  range: 'period',
  numberOfMonths: 1,
  onSelect: function (dateText, inst, extensionRange) {
    // extensionRange - объект расширения
    $('.datepicker1').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
  }
});

$('.dropdown-menu .btn-apply').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.dropdown-menu').removeClass('show');
});

$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (event) {
  $('.dataTable').DataTable()
    .columns.adjust();
  // .responsive.recalc();
});

$('.products-clients-slider').slick({
  slidesToShow: 1,
  focusOnSelect: true,
  infinite: false,
  variableWidth: true,
  asNavFor: '.products-clients-details-slider',
  nextArrow: '<button type="button" class="slick-next"></button>',
  prevArrow: '<button type="button" class="slick-prev"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 1
      }
    }
  ]
});

$('.products-clients-details-slider').slick({
  slidesToShow: 1,
  swipe: false,
  fade: true,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 1
      }
    }
  ]
});

$('.content-box-filter a.btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
});


// slider range
$(function () {
  $("#filter__range").slider({
    min: 0,
    max: 99999,
    values: [0, 45012],
    range: true,
    stop: function (event, ui) {
      $('.price-range-min.value').html($("#filter__range").slider("values", 0));
      $('.price-range-max.value').html($("#filter__range").slider("values", 1));
    },
    slide: function (event, ui) {
      $('.price-range-min.value').html($("#filter__range").slider("values", 0));
      $('.price-range-max.value').html($("#filter__range").slider("values", 1));
    }
  });

  $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1) + '</span>');
});


// tabs
$(document).ready(function ($) {

  $('.tabs-list li a').click(function (e) {

    e.preventDefault();
    $('.tabs-list li a').removeClass('active');
    $(this).addClass('active').parents('.tabs-wrap').find('.tab-content .tab-pane').removeClass('show active');

    var selectTab = $(this).attr("href");

    $(selectTab).addClass('show active');
  });
});
