class CustomException extends Exception {
    public function __construct($message, $code = 0, Exception $previous = null) {
        // Call the parent constructor
        parent::__construct($message, $code, $previous);
    }

    public function customFunction() {
        // Add custom logic specific to your exception
        return "Custom Function Called";
    }
}









try {
    // Simulate an error condition
    $age = 15;
    if ($age < 18) {
        throw new CustomException("You must be at least 18 years old.", 101);
    }

    // Your code here if no exception is thrown
    echo "You are eligible!";
} catch (CustomException $e) {
    // Custom exception handling
    echo "Custom Exception caught: " . $e->getMessage() . " (Code: " . $e->getCode() . ")\n";
    echo $e->customFunction() . "\n";

    // You can also rethrow the exception if needed
    // throw $e;
} catch (Exception $e) {
    // Catch other exceptions (not of type CustomException)
    echo "Other Exception caught: " . $e->getMessage() . "\n";
} finally {
    // Code that should be executed regardless of whether an exception is thrown
    echo "This code always runs.\n";
}
