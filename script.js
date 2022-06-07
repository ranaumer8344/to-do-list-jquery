// Adding Tasks

$(document).ready(function () {

    $("#push").click(function () {
        if ($('.input-add-data input').val() == 0) {
            alert('Please enter a value!');
        } else {
            $('.tasks').append(`
        <div class="task">
            <div class="display-flex">
                <span class="taskname">
                    ${$('.input-add-data input').val()}
                </span>
                <div class="actions">
                    <button class="delete">
                        Del
                    </button>
                    <button class="complete">
                        Done
                    </button>
                </div>
            </div>
        </div>
    `);
            $('.input-add-data input').val('');
        }
    });

    $("body").on("click", "button.delete", function () {
        $(this).parent().parent().parent().remove();
    });

    $("body").on("click", "button.complete", function () {
        $(this).parent().parent().parent().toggleClass("done");
    });

});