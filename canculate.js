
function canculate(){
const key_buffer_size = document.getElementById('key_buffer_size');
const query_cache_size = document.getElementById('query_cache_size');
const innodb_buffer_pool_size = document.getElementById('innodb_buffer_pool_size');
const innodb_log_buffer_size = document.getElementById('innodb_log_buffer_size');
const max_allowed_packet = document.getElementById('max_allowed_packet'); 
const max_connections = document.getElementById('max_connections');
const read_buffer_size = document.getElementById('read_buffer_size');
const read_rnd_buffer_size = document.getElementById('read_rnd_buffer_size');
const sort_buffer_size = document.getElementById('sort_buffer_size');
const join_buffer_size = document.getElementById('join_buffer_size');
const binlog_cache_size = document.getElementById('binlog_cache_size');
const thread_stack = document.getElementById('thread_stack');
const tmp_table_size = document.getElementById('tmp_table_size');
const net_buffer_length = document.getElementById('net_buffer_length');
const total = document.getElementById('total');
const conection_hash = parseInt(read_buffer_size.value) + parseInt(read_rnd_buffer_size.value)+
parseInt(sort_buffer_size.value) + parseInt(join_buffer_size.value) +
parseInt(binlog_cache_size.value) + parseInt(thread_stack.value) +
parseInt(tmp_table_size.value) + parseInt(net_buffer_length.value) + parseInt(net_buffer_length.value);
const conection = parseInt(max_connections.value) * conection_hash ;
total.textContent = parseInt(key_buffer_size.value) + parseInt(query_cache_size.value) + parseInt(innodb_buffer_pool_size.value)  +
parseInt(innodb_log_buffer_size.value ) + parseInt(max_allowed_packet.value) + conection + " MB";
key_buffer_size.blur();
query_cache_size.blur();
innodb_buffer_pool_size.blur();
innodb_log_buffer_size.blur();
max_allowed_packet.blur();
max_connections.blur();
read_buffer_size.blur();
read_rnd_buffer_size.blur();
sort_buffer_size.blur();
join_buffer_size.blur();
binlog_cache_size.blur();
thread_stack.blur();
tmp_table_size.blur();
net_buffer_length.blur();
}

key_buffer_size.onchange = canculate;
query_cache_size.onchange = canculate;
innodb_buffer_pool_size.onchange = canculate;
innodb_log_buffer_size.onchange = canculate;
max_allowed_packet.onchange = canculate;
max_connections.onchange = canculate;
read_buffer_size.onchange = canculate;
read_rnd_buffer_size.onchange = canculate;
sort_buffer_size.onchange = canculate;
join_buffer_size.onchange = canculate;
binlog_cache_size.onchange = canculate;
thread_stack.onchange = canculate;
tmp_table_size.onchange = canculate;
net_buffer_length.onchange = canculate;

window.onload = canculate;
