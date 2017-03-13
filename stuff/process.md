# Infinte process loop

```
defmodule Hello do
  def hello do
    receive do
      {pid_coucou, _} ->
        IO.puts "hello"
        send pid_coucou, {self, "from hello"}
        hello
    end
  end

  def coucou do
    receive do
      {pid_hello, _} ->
        IO.puts "coucou"
        send pid_hello, {self, "from coucou"}
        coucou
    end
  end
end

# start processes
pid_hello = spawn(Hello, :hello, [])
pid_coucou = spawn(Hello, :coucou, [])
send pid_hello, {pid_coucou, "start"}
```