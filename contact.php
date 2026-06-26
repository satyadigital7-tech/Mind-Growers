<?php
    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $parent_name = strip_tags(trim($_POST["parent_name"]));
        $parent_name = str_replace(array("\r","\n"), array(" "," "), $parent_name);
        $phone = strip_tags(trim($_POST["phone"]));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $child_name = strip_tags(trim($_POST["child_name"]));
        $child_name = str_replace(array("\r","\n"), array(" "," "), $child_name);
        $child_age = strip_tags(trim($_POST["child_age"]));
        $program = strip_tags(trim($_POST["program"]));
        $message = trim($_POST["message"]);

        // Validate basic fields
        if (empty($parent_name) || empty($phone) || empty($email) || empty($child_name) || empty($child_age) || empty($program)) {
            http_response_code(400);
            echo "Please fill in all required fields.";
            exit;
        }

        // Set the recipient email address.
        $recipient = "info@mindgrowerskiddoria.com";

        // Set the email subject.
        $subject = "New Admissions Inquiry from $parent_name";

        // Build the email content.
        $email_content = "Mind Growers Kiddoria - Admissions Inquiry Form Submission\n\n";
        $email_content .= "Parent Name: $parent_name\n";
        $email_content .= "Parent Email: $email\n";
        $email_content .= "Phone Number: $phone\n\n";
        $email_content .= "Child Details:\n";
        $email_content .= "  Name: $child_name\n";
        $email_content .= "  Age: $child_age\n\n";
        $email_content .= "Selected Program: $program\n\n";
        $email_content .= "Additional Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $parent_name <$email>\r\n";
        $email_headers .= "Reply-To: $email\r\n";
        $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank you! Your admissions inquiry has been sent successfully.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>