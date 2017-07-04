### Redirect Console Output ###

    using (StringWriter writer = new StringWriter())
            {
                Console.SetOut(writer);
                //write to console
                output.WriteLine(actual);
            }

### Reset Console Output ###
    private void ResetConsole()
        {
            StreamWriter standardOut = new StreamWriter(Console.OpenStandardOutput())
            {
                AutoFlush = true
            };
            Console.SetOut(standardOut);
        }

        
