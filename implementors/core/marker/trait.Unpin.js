(function() {var implementors = {};
implementors["calloop"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Poll.html\" title=\"struct calloop::Poll\">Poll</a>","synthetic":true,"types":["calloop::sys::Poll"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Readiness.html\" title=\"struct calloop::Readiness\">Readiness</a>","synthetic":true,"types":["calloop::sys::Readiness"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Token.html\" title=\"struct calloop::Token\">Token</a>","synthetic":true,"types":["calloop::sys::Token"]},{"text":"impl&lt;Data&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.EventLoop.html\" title=\"struct calloop::EventLoop\">EventLoop</a>&lt;Data&gt;","synthetic":true,"types":["calloop::loop_logic::EventLoop"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.InsertError.html\" title=\"struct calloop::InsertError\">InsertError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["calloop::loop_logic::InsertError"]},{"text":"impl&lt;Data&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.LoopHandle.html\" title=\"struct calloop::LoopHandle\">LoopHandle</a>&lt;Data&gt;","synthetic":true,"types":["calloop::loop_logic::LoopHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.LoopSignal.html\" title=\"struct calloop::LoopSignal\">LoopSignal</a>","synthetic":true,"types":["calloop::loop_logic::LoopSignal"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Source.html\" title=\"struct calloop::Source\">Source</a>&lt;S&gt;","synthetic":true,"types":["calloop::sources::Source"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Idle.html\" title=\"struct calloop::Idle\">Idle</a>","synthetic":true,"types":["calloop::sources::Idle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"calloop/enum.Interest.html\" title=\"enum calloop::Interest\">Interest</a>","synthetic":true,"types":["calloop::sys::Interest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"calloop/enum.Mode.html\" title=\"enum calloop::Mode\">Mode</a>","synthetic":true,"types":["calloop::sys::Mode"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/channel/struct.Sender.html\" title=\"struct calloop::channel::Sender\">Sender</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::channel::Sender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/channel/struct.SyncSender.html\" title=\"struct calloop::channel::SyncSender\">SyncSender</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::channel::SyncSender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/channel/struct.Channel.html\" title=\"struct calloop::channel::Channel\">Channel</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::channel::Channel"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"calloop/channel/enum.Event.html\" title=\"enum calloop::channel::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["calloop::sources::channel::Event"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/generic/struct.Generic.html\" title=\"struct calloop::generic::Generic\">Generic</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["calloop::sources::generic::Generic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/generic/struct.Fd.html\" title=\"struct calloop::generic::Fd\">Fd</a>","synthetic":true,"types":["calloop::sources::generic::Fd"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/ping/struct.PingSource.html\" title=\"struct calloop::ping::PingSource\">PingSource</a>","synthetic":true,"types":["calloop::sources::ping::PingSource"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/ping/struct.Ping.html\" title=\"struct calloop::ping::Ping\">Ping</a>","synthetic":true,"types":["calloop::sources::ping::Ping"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/signals/struct.Event.html\" title=\"struct calloop::signals::Event\">Event</a>","synthetic":true,"types":["calloop::sources::signals::Event"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/signals/struct.Signals.html\" title=\"struct calloop::signals::Signals\">Signals</a>","synthetic":true,"types":["calloop::sources::signals::Signals"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/timer/struct.Timer.html\" title=\"struct calloop::timer::Timer\">Timer</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::timer::Timer"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/timer/struct.TimerHandle.html\" title=\"struct calloop::timer::TimerHandle\">TimerHandle</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::timer::TimerHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/timer/struct.Timeout.html\" title=\"struct calloop::timer::Timeout\">Timeout</a>","synthetic":true,"types":["calloop::sources::timer::Timeout"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()