$(document).ready(function() {
    var array = [],
        employees = [],
        totalSalary = 0,
        monthlyPayroll = 0;

    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      employees.push(values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text], input[type=number]').val('');

      // append to DOM
      updateDOM(employees)
    });

    $('#container').on('click', '.delete', function (event) {
      var $row = $(this).closest('tr'),
          indexToRemove = $row.data('index');

      employees.splice(indexToRemove, 1)

      updateDOM(employees);
    });

    function updateDOM(employees) {
      drawTable(employees);
      changeTotal(employees);
    }

    function drawTable(employees) {
      $('#container').empty();
      for (var i = 0; i < employees.length; i++) {
        appendDom(employees[i], i);
      }
    }

    function appendDom(empInfo, index) {
      $('#container').append('<tr></tr>');
      var $el = $('#container').children().last();

      $el.data('index', index);
      $el.append('<td>' + empInfo.employeeFirstName + '</td>');
      $el.append('<td>' + empInfo.employeeLastName + '</td>');
      $el.append('<td>' + empInfo.idNumber + '</td>');
      $el.append('<td>' + empInfo.jobTitle + '</td>');
      $el.append('<td>' + empInfo.annualSalary + '</td>');
      $el.append('<td><button class="delete">Delete</button></td>');
    }

    function changeTotal(employees) {
      totalSalary = 0;
      for (var i = 0; i < employees.length; i++) {
        totalSalary += parseFloat(employees[i].annualSalary);
      }

      monthlyPayroll = totalSalary / 12;
      $('#monthlyPayroll').text(monthlyPayroll.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));;
    }
});
