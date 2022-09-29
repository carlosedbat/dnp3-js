// // callback interface used to receive log messages
// class ConsoleLogger : ILogger
// {
//     public void OnMessage(LogLevel level, string message)
//     {
//         Console.Write($"{message}");
//     }
// }

// // Initialize logging with the default configuration
// // This may only be called once during program initialization
// Logging.Configure(
//     new LoggingConfig(),
//     new ConsoleLogger()
// );