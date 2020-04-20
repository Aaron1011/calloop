var searchIndex={};
searchIndex["calloop"] = {"doc":"Calloop, a Callback-based Event Loop","i":[[3,"Poll","calloop","The polling system",null,null],[3,"Readiness","","Readiness for a file descriptor notification",null,null],[12,"readable","","Is the FD readable",0,null],[12,"writable","","Is the FD writable",0,null],[12,"error","","Is the FD in an error state",0,null],[3,"Token","","A Token for registration",null,null],[12,"sub_id","","The source-internal ID",1,null],[3,"EventLoop","","An event loop",null,null],[3,"InsertError","","An error generated when trying to insert an event source",null,null],[12,"source","","The source that could not be inserted",2,null],[12,"error","","The generated error",2,null],[3,"LoopHandle","","An handle to an event loop",null,null],[3,"LoopSignal","","A signal that can be shared between thread to stop or…",null,null],[3,"Source","","A token representing an event source inserted in the event…",null,null],[3,"Idle","","An idle callback that was inserted in this loop",null,null],[4,"Interest","","Interest to register regarding the file descriptor",null,null],[13,"Readable","","Will generate events when readable",3,null],[13,"Writable","","Will generate events when writable",3,null],[13,"Both","","Will generate events when readable or writable",3,null],[4,"Mode","","Possible modes for registering a file descriptor",null,null],[13,"OneShot","","Single event generation",4,null],[13,"Level","","Level-triggering",4,null],[13,"Edge","","Edge-triggering",4,null],[11,"register","","Register a new file descriptor for polling",5,[[["interest"],["rawfd"],["self"],["mode"],["token"]],["result"]]],[11,"reregister","","Update the registration for a file descriptor",5,[[["interest"],["rawfd"],["self"],["mode"],["token"]],["result"]]],[11,"unregister","","Unregister a file descriptor",5,[[["self"],["rawfd"]],["result"]]],[0,"channel","","An MPSC channel whose receiving end is an event source",null,null],[3,"Sender","calloop::channel","The sender end of a channel",null,null],[3,"SyncSender","","The sender end of a synchronous channel",null,null],[3,"Channel","","The receiving end of the channel",null,null],[4,"Event","","The events generated by the channel event source",null,null],[13,"Msg","","A message was received and is bundled here",6,null],[13,"Closed","","The channel was closed",6,null],[5,"channel","","Create a new asynchronous channel",null,[[]]],[5,"sync_channel","","Create a new synchronous, bounded channel",null,[[["usize"]]]],[0,"generic","calloop","A generic event source wrapping a file descriptor",null,null],[3,"Generic","calloop::generic","A generic event source wrapping a FD-backed type",null,null],[12,"file","","The wrapped FD-backed type",7,null],[12,"interest","","The programmed interest",7,null],[12,"mode","","The programmed mode",7,null],[3,"Fd","","A wrapper to insert a raw file descriptor into a `Generic`…",null,null],[12,"0","","",8,null],[0,"ping","calloop","Ping to the event loop",null,null],[3,"PingSource","calloop::ping","The ping event source",null,null],[3,"Ping","","The Ping handle",null,null],[5,"make_ping","","Create a new ping event source",null,[[],["result"]]],[0,"signals","calloop","Event source for tracking Unix signals",null,null],[4,"Signal","calloop::signals","",null,null],[13,"SIGHUP","","",9,null],[13,"SIGINT","","",9,null],[13,"SIGQUIT","","",9,null],[13,"SIGILL","","",9,null],[13,"SIGTRAP","","",9,null],[13,"SIGABRT","","",9,null],[13,"SIGBUS","","",9,null],[13,"SIGFPE","","",9,null],[13,"SIGKILL","","",9,null],[13,"SIGUSR1","","",9,null],[13,"SIGSEGV","","",9,null],[13,"SIGUSR2","","",9,null],[13,"SIGPIPE","","",9,null],[13,"SIGALRM","","",9,null],[13,"SIGTERM","","",9,null],[13,"SIGSTKFLT","","",9,null],[13,"SIGCHLD","","",9,null],[13,"SIGCONT","","",9,null],[13,"SIGSTOP","","",9,null],[13,"SIGTSTP","","",9,null],[13,"SIGTTIN","","",9,null],[13,"SIGTTOU","","",9,null],[13,"SIGURG","","",9,null],[13,"SIGXCPU","","",9,null],[13,"SIGXFSZ","","",9,null],[13,"SIGVTALRM","","",9,null],[13,"SIGPROF","","",9,null],[13,"SIGWINCH","","",9,null],[13,"SIGIO","","",9,null],[13,"SIGPWR","","",9,null],[13,"SIGSYS","","",9,null],[3,"siginfo","","",null,null],[12,"ssi_signo","","",10,null],[12,"ssi_errno","","",10,null],[12,"ssi_code","","",10,null],[12,"ssi_pid","","",10,null],[12,"ssi_uid","","",10,null],[12,"ssi_fd","","",10,null],[12,"ssi_tid","","",10,null],[12,"ssi_band","","",10,null],[12,"ssi_overrun","","",10,null],[12,"ssi_trapno","","",10,null],[12,"ssi_status","","",10,null],[12,"ssi_int","","",10,null],[12,"ssi_ptr","","",10,null],[12,"ssi_utime","","",10,null],[12,"ssi_stime","","",10,null],[12,"ssi_addr","","",10,null],[12,"ssi_addr_lsb","","",10,null],[12,"ssi_syscall","","",10,null],[12,"ssi_call_addr","","",10,null],[12,"ssi_arch","","",10,null],[3,"Event","","An event generated by the signal event source",null,null],[3,"Signals","","An event source for receiving Unix signals",null,null],[0,"timer","calloop","Timer-based event sources",null,null],[3,"Timer","calloop::timer","A Timer event source",null,null],[3,"TimerHandle","","An handle to a timer, used to set or cancel timeouts",null,null],[3,"Timeout","","An itentifier to cancel a timeout if necessary",null,null],[11,"insert_source","calloop","Insert an new event source in the loop",11,[[["s"],["self"],["f"]],[["source"],["inserterror"],["result",["source","inserterror"]]]]],[11,"insert_idle","","Insert an idle callback",11,[[["fnonce"],["self"]],["idle"]]],[11,"with_source","","Access this event source",11,[[["source"],["self"],["fnonce"]],["t"]]],[11,"enable","","Enable this previously disabled event source",11,[[["self"],["source"]],["result"]]],[11,"update","","Make this source update its registration",11,[[["self"],["source"]],["result"]]],[11,"disable","","Disable this event source",11,[[["self"],["source"]],["result"]]],[11,"remove","","Remove this source from the event loop",11,[[["source"],["self"],["eventsource"]],["eventsource"]]],[11,"new","","Create a new event loop",12,[[],[["eventloop"],["result",["eventloop"]]]]],[11,"handle","","Retrieve a loop handle",12,[[["self"]],["loophandle"]]],[11,"dispatch","","Dispatch pending events to their callbacks",12,[[["data"],["self"],["option",["duration"]],["into",["option"]]],["result"]]],[11,"get_signal","","Get a signal to stop this event loop from running",12,[[["self"]],["loopsignal"]]],[11,"run","","Run this event loop",12,[[["duration"],["data"],["self"],["option",["duration"]],["f"]],["result"]]],[11,"stop","","Stop the event loop",13,[[["self"]]]],[11,"wakeup","","Wake up the event loop",13,[[["self"]]]],[11,"send","calloop::channel","Send a message to the channel",14,[[["self"],["t"]],[["result",["senderror"]],["senderror"]]]],[11,"send","","Send a message to the synchronous channel",15,[[["self"],["t"]],[["result",["senderror"]],["senderror"]]]],[11,"try_send","","Send a message to the synchronous channel",15,[[["self"],["t"]],[["result",["trysenderror"]],["trysenderror"]]]],[11,"new","calloop::generic","Wrap a FD-backed type into a `Generic` event source",7,[[["interest"],["f"],["mode"]],["generic"]]],[11,"unwrap","","Unwrap the `Generic` source to retrieve the underlying type",7,[[],["f"]]],[11,"from_fd","","Wrap a raw file descriptor into a `Generic` event source",7,[[["interest"],["mode"],["rawfd"]],[["fd"],["generic",["fd"]]]]],[11,"ping","calloop::ping","Send a ping to the `PingSource`",16,[[["self"]]]],[11,"signal","calloop::signals","Retrieve the signal number that was receive",17,[[["self"]],["signal"]]],[11,"full_info","","Access the full `siginfo_t` associated with this signal…",17,[[["self"]],["siginfo"]]],[11,"new","","Create a new signal event source listening on the…",18,[[],[["result",["signals"]],["signals"]]]],[11,"add_signals","","Add a list of signals to the signals source",18,[[["self"]],["result"]]],[11,"remove_signals","","Remove a list of signals to the signals source",18,[[["self"]],["result"]]],[11,"set_signals","","Replace the list of signals of the source",18,[[["self"]],["result"]]],[11,"new","calloop::timer","Create a new timer with default parameters",19,[[],[["timer"],["result",["timer"]]]]],[11,"handle","","Get an handle for this timer",19,[[["self"]],["timerhandle"]]],[11,"add_timeout","","Set a new timeout",20,[[["t"],["self"],["duration"]],["timeout"]]],[11,"cancel_timeout","","Cancel a previsouly set timeout and retrieve the…",20,[[["timeout"],["self"]],["option"]]],[11,"cancel_all_timeouts","","Cancel all planned timeouts for this timer",20,[[["self"]]]],[11,"cancel","calloop","Cancel the idle callback if it was not already run",21,[[]]],[8,"EventSource","","Trait representing an event source",null,null],[16,"Event","","The type of events generated by your source.",22,null],[16,"Metadata","","Some metadata of your event source",22,null],[16,"Ret","","The return type of the user callback",22,null],[10,"process_events","","Process any relevant events",22,[[["readiness"],["self"],["f"],["token"]],["result"]]],[10,"register","","Register yourself to this poll instance",22,[[["self"],["poll"],["token"]],["result"]]],[10,"reregister","","Re-register your file descriptors",22,[[["self"],["poll"],["token"]],["result"]]],[10,"unregister","","Unregister your file descriptors",22,[[["self"],["poll"]],["result"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[],["u"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"type_id","","",12,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,[[["self"],["t"]]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[],["u"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,[[["self"],["t"]]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"try_into","","",13,[[],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"type_id","","",13,[[["self"]],["typeid"]]],[11,"from","","",23,[[["t"]],["t"]]],[11,"into","","",23,[[],["u"]]],[11,"try_from","","",23,[[["u"]],["result"]]],[11,"try_into","","",23,[[],["result"]]],[11,"borrow","","",23,[[["self"]],["t"]]],[11,"borrow_mut","","",23,[[["self"]],["t"]]],[11,"type_id","","",23,[[["self"]],["typeid"]]],[11,"from","","",21,[[["t"]],["t"]]],[11,"into","","",21,[[],["u"]]],[11,"try_from","","",21,[[["u"]],["result"]]],[11,"try_into","","",21,[[],["result"]]],[11,"borrow","","",21,[[["self"]],["t"]]],[11,"borrow_mut","","",21,[[["self"]],["t"]]],[11,"type_id","","",21,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","calloop::channel","",14,[[["t"]],["t"]]],[11,"into","","",14,[[],["u"]]],[11,"to_owned","","",14,[[["self"]],["t"]]],[11,"clone_into","","",14,[[["self"],["t"]]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"try_into","","",14,[[],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"type_id","","",14,[[["self"]],["typeid"]]],[11,"from","","",15,[[["t"]],["t"]]],[11,"into","","",15,[[],["u"]]],[11,"to_owned","","",15,[[["self"]],["t"]]],[11,"clone_into","","",15,[[["self"],["t"]]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"try_into","","",15,[[],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"type_id","","",15,[[["self"]],["typeid"]]],[11,"from","","",24,[[["t"]],["t"]]],[11,"into","","",24,[[],["u"]]],[11,"try_from","","",24,[[["u"]],["result"]]],[11,"try_into","","",24,[[],["result"]]],[11,"borrow","","",24,[[["self"]],["t"]]],[11,"borrow_mut","","",24,[[["self"]],["t"]]],[11,"type_id","","",24,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"from","calloop::generic","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"from","calloop::ping","",25,[[["t"]],["t"]]],[11,"into","","",25,[[],["u"]]],[11,"try_from","","",25,[[["u"]],["result"]]],[11,"try_into","","",25,[[],["result"]]],[11,"borrow","","",25,[[["self"]],["t"]]],[11,"borrow_mut","","",25,[[["self"]],["t"]]],[11,"type_id","","",25,[[["self"]],["typeid"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"into","","",16,[[],["u"]]],[11,"to_owned","","",16,[[["self"]],["t"]]],[11,"clone_into","","",16,[[["self"],["t"]]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"try_into","","",16,[[],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"type_id","","",16,[[["self"]],["typeid"]]],[11,"from","calloop::signals","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,[[["self"],["t"]]]],[11,"to_string","","",9,[[["self"]],["string"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[],["u"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,[[["self"],["t"]]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"type_id","","",10,[[["self"]],["typeid"]]],[11,"from","","",17,[[["t"]],["t"]]],[11,"into","","",17,[[],["u"]]],[11,"to_owned","","",17,[[["self"]],["t"]]],[11,"clone_into","","",17,[[["self"],["t"]]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"try_into","","",17,[[],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"type_id","","",17,[[["self"]],["typeid"]]],[11,"from","","",18,[[["t"]],["t"]]],[11,"into","","",18,[[],["u"]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"try_into","","",18,[[],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"type_id","","",18,[[["self"]],["typeid"]]],[11,"from","calloop::timer","",19,[[["t"]],["t"]]],[11,"into","","",19,[[],["u"]]],[11,"try_from","","",19,[[["u"]],["result"]]],[11,"try_into","","",19,[[],["result"]]],[11,"borrow","","",19,[[["self"]],["t"]]],[11,"borrow_mut","","",19,[[["self"]],["t"]]],[11,"type_id","","",19,[[["self"]],["typeid"]]],[11,"from","","",20,[[["t"]],["t"]]],[11,"into","","",20,[[],["u"]]],[11,"to_owned","","",20,[[["self"]],["t"]]],[11,"clone_into","","",20,[[["self"],["t"]]]],[11,"try_from","","",20,[[["u"]],["result"]]],[11,"try_into","","",20,[[],["result"]]],[11,"borrow","","",20,[[["self"]],["t"]]],[11,"borrow_mut","","",20,[[["self"]],["t"]]],[11,"type_id","","",20,[[["self"]],["typeid"]]],[11,"from","","",26,[[["t"]],["t"]]],[11,"into","","",26,[[],["u"]]],[11,"try_from","","",26,[[["u"]],["result"]]],[11,"try_into","","",26,[[],["result"]]],[11,"borrow","","",26,[[["self"]],["t"]]],[11,"borrow_mut","","",26,[[["self"]],["t"]]],[11,"type_id","","",26,[[["self"]],["typeid"]]],[11,"fmt","calloop::signals","",9,[[["self"],["formatter"]],[["result",["error"]],["error"]]]],[11,"cmp","","",9,[[["self"],["signal"]],["ordering"]]],[11,"as_ref","","",9,[[["self"]],["str"]]],[11,"hash","","",9,[[["self"],["__h"]]]],[11,"clone","","",9,[[["self"]],["signal"]]],[11,"partial_cmp","","",9,[[["self"],["signal"]],[["option",["ordering"]],["ordering"]]]],[11,"from_str","","",9,[[["str"]],[["signal"],["error"],["result",["signal","error"]]]]],[11,"eq","","",9,[[["self"],["signal"]],["bool"]]],[11,"try_from","","",9,[[["i32"]],[["signal"],["error"],["result",["signal","error"]]]]],[11,"fmt","","",9,[[["self"],["formatter"]],[["result",["error"]],["error"]]]],[11,"clone","","",10,[[["self"]],["signalfd_siginfo"]]],[11,"hash","","",10,[[["self"],["__h"]]]],[11,"eq","","",10,[[["self"],["signalfd_siginfo"]],["bool"]]],[11,"ne","","",10,[[["self"],["signalfd_siginfo"]],["bool"]]],[11,"fmt","","",10,[[["self"],["formatter"]],[["result",["error"]],["error"]]]],[11,"process_events","calloop::channel","",24,[[["readiness"],["c"],["self"],["token"]],["result"]]],[11,"register","","",24,[[["self"],["poll"],["token"]],["result"]]],[11,"reregister","","",24,[[["self"],["poll"],["token"]],["result"]]],[11,"unregister","","",24,[[["self"],["poll"]],["result"]]],[11,"process_events","calloop::generic","",7,[[["readiness"],["c"],["self"],["token"]],["result"]]],[11,"register","","",7,[[["self"],["poll"],["token"]],["result"]]],[11,"reregister","","",7,[[["self"],["poll"],["token"]],["result"]]],[11,"unregister","","",7,[[["self"],["poll"]],["result"]]],[11,"process_events","calloop::ping","",25,[[["readiness"],["c"],["self"],["token"]],["result"]]],[11,"register","","",25,[[["self"],["poll"],["token"]],["result"]]],[11,"reregister","","",25,[[["self"],["poll"],["token"]],["result"]]],[11,"unregister","","",25,[[["self"],["poll"]],["result"]]],[11,"process_events","calloop::signals","",18,[[["readiness"],["c"],["self"],["token"]],["result"]]],[11,"register","","",18,[[["self"],["poll"],["token"]],["result"]]],[11,"reregister","","",18,[[["self"],["poll"],["token"]],["result"]]],[11,"unregister","","",18,[[["self"],["poll"]],["result"]]],[11,"process_events","calloop::timer","",19,[[["readiness"],["c"],["self"],["token"]],["result"]]],[11,"register","","",19,[[["self"],["poll"],["token"]],["result"]]],[11,"reregister","","",19,[[["self"],["poll"],["token"]],["result"]]],[11,"unregister","","",19,[[["self"],["poll"]],["result"]]],[11,"drop","calloop::channel","",14,[[["self"]]]],[11,"drop","calloop::ping","",25,[[["self"]]]],[11,"drop","calloop::signals","",18,[[["self"]]]],[11,"clone","calloop","",4,[[["self"]],["mode"]]],[11,"clone","","",3,[[["self"]],["interest"]]],[11,"clone","","",0,[[["self"]],["readiness"]]],[11,"clone","","",1,[[["self"]],["token"]]],[11,"clone","","",11,[[["self"]],["loophandle"]]],[11,"clone","","",13,[[["self"]],["loopsignal"]]],[11,"clone","calloop::channel","",14,[[["self"]],["sender"]]],[11,"clone","","",15,[[["self"]],["syncsender"]]],[11,"clone","calloop::ping","",16,[[["self"]],["ping"]]],[11,"clone","calloop::signals","",17,[[["self"]],["event"]]],[11,"clone","calloop::timer","",20,[[["self"]],["timerhandle"]]],[11,"eq","calloop","",1,[[["self"],["token"]],["bool"]]],[11,"ne","","",1,[[["self"],["token"]],["bool"]]],[11,"fmt","","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",1,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",2,[[["formatter"],["self"]],[["result",["error"]],["error"]]]],[11,"as_raw_fd","calloop::generic","",8,[[["self"]],["rawfd"]]],[11,"as_str","calloop::signals","Returns name of signal.",9,[[],["str"]]],[11,"iterator","","",9,[[],["signaliterator"]]]],"p":[[3,"Readiness"],[3,"Token"],[3,"InsertError"],[4,"Interest"],[4,"Mode"],[3,"Poll"],[4,"Event"],[3,"Generic"],[3,"Fd"],[4,"Signal"],[3,"siginfo"],[3,"LoopHandle"],[3,"EventLoop"],[3,"LoopSignal"],[3,"Sender"],[3,"SyncSender"],[3,"Ping"],[3,"Event"],[3,"Signals"],[3,"Timer"],[3,"TimerHandle"],[3,"Idle"],[8,"EventSource"],[3,"Source"],[3,"Channel"],[3,"PingSource"],[3,"Timeout"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);