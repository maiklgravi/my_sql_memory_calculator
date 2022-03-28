function canculate() {
  const key_buffer_size = document.getElementById("key_buffer_size");
  const query_cache_size = document.getElementById("query_cache_size");
  const innodb_buffer_pool_size = document.getElementById("innodb_buffer_pool_size");
  const innodb_log_buffer_size = document.getElementById("innodb_log_buffer_size");
  const max_allowed_packet = document.getElementById("max_allowed_packet");
  const max_connections = document.getElementById("max_connections");
  const read_buffer_size = document.getElementById("read_buffer_size");
  const read_rnd_buffer_size = document.getElementById("read_rnd_buffer_size");
  const sort_buffer_size = document.getElementById("sort_buffer_size");
  const join_buffer_size = document.getElementById("join_buffer_size");
  const binlog_cache_size = document.getElementById("binlog_cache_size");
  const thread_stack = document.getElementById("thread_stack");
  const tmp_table_size = document.getElementById("tmp_table_size");
  const net_buffer_length = document.getElementById("net_buffer_length");
  const total = document.getElementById("total");
  const info = document.getElementById("info");
  const system = document.getElementById("system");
  const version = document.getElementById("version");
  const os_system = document.getElementById("os_system");
  const conection_hash =
    Number(read_buffer_size.value) +
    Number(read_rnd_buffer_size.value) +
    Number(sort_buffer_size.value) +
    Number(join_buffer_size.value) +
    Number(binlog_cache_size.value) +
    Number(thread_stack.value) +
    Number(tmp_table_size.value) +
    Number(net_buffer_length.value) +
    Number(net_buffer_length.value);
  const conection = parseInt(max_connections.value) * conection_hash;
  total.textContent =
    Number(key_buffer_size.value) +
    Number(query_cache_size.value) +
    Number(innodb_buffer_pool_size.value) +
    Number(innodb_log_buffer_size.value) +
    Number(max_allowed_packet.value) +
    conection +
    " MB";
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
  rekomandation();
}
function valueError(key_name,max_value,min_value){
  if (Number(key_name.value) < min_value) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min `+key_name.id+` value is `+ min_value +` MB
      </div>
    </div>`;
  }
  if (Number(key_name.value) > max_value) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Max `+ key_name.id +` value is `+ max_value +` MB
      </div>
    </div>`;
  }
}
function default_value(key_name,value){
  const element = document.getElementById(
    key_name.id
  );
  element.textContent = "The default is " + value + " MB";
}
function rekomandation() {
  info.innerHTML = "";
  
  if (system.value === "1") {
    valueError(key_buffer_size,4095.9999990463257,0);
  }
  valueError(net_buffer_length,1,0.0009765625);
  valueError(tmp_table_size,17592186044416,0.0009765625);

  if (system.value === "1") {
    
    if (version.value === "1") {
      default_value(default_thread_stack,1)
    } else {
      default_value(default_thread_stack,0.2109375)
    }
    valueError(thread_stack,4095.9990234375,0.125);
  } else {
    if (version.value === "1") {
      default_value(default_thread_stack,1)
    } else {
      default_value(default_thread_stack,0.2734375)
    }
    valueError(thread_stack,17592186044416,0.125);
  }

  if (system.value === "1") {
    valueError(binlog_cache_size,4095.9999990463257,0.000244140625);
  } else {
    valueError(binlog_cache_size,17592186044415.996,0.000244140625);
  }

  if (os_system.value === "2" && system.value === "2") {
    valueError(join_buffer_size,17592186044416,0.0001220703125);
  } else {
    valueError(join_buffer_size,39999.99987793,0.0001220703125);
  }

  if (os_system.value === "2" && system.value === "2") {
    valueError(sort_buffer_size,17592186044416,0.03125);
  } else {
    valueError(sort_buffer_size,4095.9999990463257,0.03125);
  }
  if (Number(innodb_buffer_pool_size.value) < 5) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min innodb_buffer_pool_size value is 5 MB
      </div>
    </div>`;
  }
  valueError(innodb_log_buffer_size,4095.9999990463257,1);
  valueError(max_allowed_packet,1024,0.0009765625);
  valueError(max_connections,100000,1);
  valueError(read_buffer_size,2047.99609375,0.0078125);
  valueError(read_rnd_buffer_size,2047.9999990463257,0.00000095367432);
  
}
function convert(key_name) {
  if (
    Number(
      configuration
        .replace(/\s+/g, "")
        .split(key_name.id + "=")
        .pop()
        .split("G")[0]
    )
  ) {
    key_name.value =
      Number(
        configuration
          .replace(/\s+/g, "")
          .split(key_name.id + "=")
          .pop()
          .split("G")[0]
      ) * 1000;
  }
  if (
    Number(
      configuration
        .replace(/\s+/g, "")
        .split(key_name.id + "=")
        .pop()
        .split("K")[0]
    )
  ) {
    key_name.value =
      Number(
        configuration
          .replace(/\s+/g, "")
          .split(key_name.id + "=")
          .pop()
          .split("K")[0]
      ) / 1000;
  }
  if (
    Number(
      configuration
        .replace(/\s+/g, "")
        .split(key_name.id + "=")
        .pop()
        .split("M")[0]
    )
  ) {
    key_name.value = Number(
      configuration
        .replace(/\s+/g, "")
        .split(key_name.id + "=")
        .pop()
        .split("M")[0]
    );
  }
  let i = 30;
  if (
    !Number(
      configuration
        .replace(/\s+/g, "")
        .split(key_name.id + "=")
        .pop()
        .split("K")[0]
    ) &&
    !Number(
      configuration
        .replace(/\s+/g, "")
        .split(key_name.id + "=")
        .pop()
        .split("G")[0]
    ) &&
    !Number(
      configuration
        .replace(/\s+/g, "")
        .split(key_name.id + "=")
        .pop()
        .split("M")[0]
    )
  ) {
    do {
      if (
        Number(
          configuration
            .replace(/\s+/g, "")
            .split(key_name.id + "=")
            .pop()
            .substr(0, i)
        )
      ) {
        key_name.value =
          Number(
            configuration
              .replace(/\s+/g, "")
              .split(key_name.id + "=")
              .pop()
              .substr(0, i)
          ) / 1000000;

        break;
      }
      if (i === 0) {
        break;
      }
      i--;
    } while (true);
  }
}

document.getElementById("inputfile").addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    configuration = String(fr.result);
    convert(key_buffer_size);
    convert(query_cache_size);
    convert(innodb_buffer_pool_size);
    convert(innodb_log_buffer_size);
    convert(max_allowed_packet);
    convert(read_buffer_size);
    convert(read_rnd_buffer_size);
    convert(sort_buffer_size);
    convert(join_buffer_size);
    convert(binlog_cache_size);
    convert(thread_stack);
    convert(tmp_table_size);
    convert(net_buffer_length);
    let i = 30;
    do {
      if (
        Number(
          configuration
            .replace(/\s+/g, "")
            .split(max_connections.id + "=")
            .pop()
            .substr(0, i)
        )
      ) {
        max_connections.value = Number(
          configuration
            .replace(/\s+/g, "")
            .split(max_connections.id + "=")
            .pop()
            .substr(0, i)
        );

        break;
      }
      if (i === 0) {
        break;
      }
      i--;
    } while (true);
  };
  fr.readAsText(this.files[0]);
});

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
system.onchange = canculate;
version.onchange = canculate;
os_system.onchange = canculate;

window.onload = canculate;
