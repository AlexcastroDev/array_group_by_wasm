
# AI Stack
This command will compile our main.rs
```bash
    rustc src/ai_stack.rs
```

This command will show compile version of our ai_stack.rs

```bash
    xxd -g1 main
```

----- 

Part of the video explain about part of Memory: Stack, Heap, High Adress, and Low address.

Stack frame is where variable will keep.


-----

Stack will put:

| Stack  |
|:------:|
| main() |
| p_d()  |
| p_a()  |
| p_e()  |

After end ```p_e()```, we have nothing to do, and remove p_e from stack


| Stack  |
|:------:|
| main() |
| p_d()  |
| p_a()  |

After running p_e, we dont have instruction and we remove p_a()

| Stack  |
|:------:|
| main() |
| p_d()  |

After running p_a, we dont have instruction and we remove p_d()

| Stack  |
|:------:|
| main() |

Now, we have to execute ```p_f()```, and this will add ```p_b()```


| Stack  |
|:------:|
| main() |
| p_f()  |
| p_b()  |

After execution of p_b, will remove from stack, and after p_f(), will remove from stack.
same with ```main()``` and our stack will be free


| Stack  |
|:------:|

### Stack Overflow

If we create a p_g that call p_h, and create p_h that calls p_g:

thread 'main' has overflowed its stack
fatal runtime error: stack overflow
[1]    45765 abort      cargo run
