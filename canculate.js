function canculate() {
  const key_buffer_size = document.getElementById("key_buffer_size");
  const query_cache_size = document.getElementById("query_cache_size");
  const innodb_buffer_pool_size = document.getElementById(
    "innodb_buffer_pool_size"
  );
  const innodb_log_buffer_size = document.getElementById(
    "innodb_log_buffer_size"
  );
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
function rekomandation() {
  info.innerHTML = "";
  if (system.value === "1") {
    if (Number(key_buffer_size.value) > 4095.9999990463257) {
      info.innerHTML =
        info.innerHTML +
        `<div class="alert alert-danger" role="alert">
        Max key_buffer_size value is 4095.9999990463257 MB
      </div>
    </div>`;
    }
  }
  if (Number(net_buffer_length.value) < 0.0009765625) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min net_buffer_length value is 0.0009765625 MB
      </div>
    </div>`;
  }
  if (Number(net_buffer_length.value) > 1) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Max net_buffer_length value is 1 MB
      </div>
    </div>`;
  }
  if (Number(tmp_table_size.value) < 0.0009765625) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min tmp_table_size value is 0.0009765625 MB
      </div>
    </div>`;
  }
  if (Number(tmp_table_size.value) > 17592186044416) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Max net_buffer_length value is 17592186044416 MB
      </div>
    </div>`;
  }
  if (Number(thread_stack.value) < 0.125) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min thread_stack value is 0.125 MB
      </div>
    </div>`;
  }
  if (system.value === "1") {
    if (version.value === "1") {
      const default_thread_stack = document.getElementById(
        "default_thread_stack"
      );
      default_thread_stack.textContent = "The default is " + 1 + " MB";
    } else {
      const default_thread_stack = document.getElementById(
        "default_thread_stack"
      );
      default_thread_stack.textContent = "The default is " + 0.2109375 + " MB";
    }
    if (Number(thread_stack.value) > 4095.9990234375) {
      info.innerHTML =
        info.innerHTML +
        `<div class="alert alert-danger" role="alert">
            Max thread_stack value is 4095.9990234375 MB
          </div>
        </div>`;
    }
  } else {
    if (version.value === "1") {
      const default_thread_stack = document.getElementById(
        "default_thread_stack"
      );
      default_thread_stack.textContent = "The default is " + 1 + " MB";
    } else {
      const default_thread_stack = document.getElementById(
        "default_thread_stack"
      );
      default_thread_stack.textContent = "The default is " + 0.2734375 + " MB";
    }
    if (Number(thread_stack.value) > 17592186044416) {
      info.innerHTML =
        info.innerHTML +
        `<div class="alert alert-danger" role="alert">
        Max thread_stack value is 17592186044416 MB
      </div>
    </div>`;
    }
  }

  if (Number(binlog_cache_size.value) < 0.000244140625) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min binlog_cache_size value is 0.000244140625 MB
      </div>
    </div>`;
  }

  if (system.value === "1") {
    if (Number(binlog_cache_size.value) > 4095.9999990463257) {
      info.innerHTML =
        info.innerHTML +
        `<div class="alert alert-danger" role="alert">
        Max binlog_cache_size value is 4095.9999990463257 MB
      </div>
    </div>`;
    }
  } else {
    if (Number(binlog_cache_size.value) > 17592186044415.996) {
      info.innerHTML =
        info.innerHTML +
        `<div class="alert alert-danger" role="alert">
            Max binlog_cache_size value is 17592186044415.996 MB
          </div>
        </div>`;
    }
  }

  if (os_system.value === "2" && system.value === "2") {
    if (Number(join_buffer_size.value) > 17592186044416) {
      info.innerHTML =
        info.innerHTML +
        `<div class="alert alert-danger" role="alert">
            Max join_buffer_size value is 17592186044416 MB
          </div>
        </div>`;
    }
  } else {
    if (Number(join_buffer_size.value) > 39999.99987793) {
      info.innerHTML =
        info.innerHTML +
        `<div class="alert alert-danger" role="alert">
            Max join_buffer_size value is 39999.99987793 MB
          </div>
        </div>`;
    }
  }
  if (Number(join_buffer_size.value) < 0.0001220703125) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min join_buffer_size value is 0.0001220703125 MB
      </div>
    </div>`;
  }

  if (os_system.value === "2" && system.value === "2") {
    if (Number(sort_buffer_size.value) > 17592186044416) {
      info.innerHTML =
        info.innerHTML +
        `<div class="alert alert-danger" role="alert">
            Max sort_buffer_size value is 17592186044416 MB
          </div>
        </div>`;
    }
  } else {
    if (Number(sort_buffer_size.value) > 4095.9999990463257) {
      info.innerHTML =
        info.innerHTML +
        `<div class="alert alert-danger" role="alert">
            Max sort_buffer_size value is 4095.9999990463257 MB
          </div>
        </div>`;
    }
  }
  if (Number(sort_buffer_size.value) < 0.03125) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min sort_buffer_size value is 0.03125 MB
      </div>
    </div>`;
  }

  if (Number(read_rnd_buffer_size.value) < 0.00000095367432) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min read_rnd_buffer_size value is 0.00000095367432 MB
      </div>
    </div>`;
  }
  if (Number(read_rnd_buffer_size.value) > 2047.9999990463257) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Max read_rnd_buffer_size value is 2047.9999990463257 MB
      </div>
    </div>`;
  }
  if (Number(read_buffer_size.value) < 0.0078125) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min read_buffer_size value is 0.0078125MB
      </div>
    </div>`;
  }
  if (Number(read_buffer_size.value) > 2047.99609375) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Max read_buffer_size value is 2047.99609375 MB
      </div>
    </div>`;
  }
  if (Number(max_connections.value) < 1) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min max_connections value is 1
      </div>
    </div>`;
  }
  if (Number(max_connections.value) > 100000) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Max max_connections value is 100000
      </div>
    </div>`;
  }
  if (Number(max_allowed_packet.value) < 0.0009765625) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min max_allowed_packet value is 0.0009765625 MB
      </div>
    </div>`;
  }
  if (Number(max_allowed_packet.value) > 1024) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Max max_allowed_packet value is 1024 MB
      </div>
    </div>`;
  }
  if (Number(innodb_log_buffer_size.value) < 1) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min innodb_log_buffer_size is 1 MB
      </div>
    </div>`;
  }
  if (Number(innodb_log_buffer_size.value) > 4095.9999990463257) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Max innodb_log_buffer_size value is 4095.9999990463257 MB
      </div>
    </div>`;
  }
  if (Number(innodb_buffer_pool_size.value) < 5) {
    info.innerHTML =
      info.innerHTML +
      `<div class="alert alert-danger" role="alert">
        Min innodb_buffer_pool_size value is 5 MB
      </div>
    </div>`;
  }
}
function convertGigabait(key_name) {
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
}
function convertKilobait(key_name) {
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
}
function convertBait(key_name, i) {
  if (
    !Number(
      configuration
        .replace(/\s+/g, "")
        .split(key_name.id + "=")
        .pop()
        .split("K")[0]
    ) ||
    !Number(
      configuration
        .replace(/\s+/g, "")
        .split(key_name.id + "=")
        .pop()
        .split("G")[0]
    ) ||
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
        key_name.value = Number(
          configuration
            .replace(/\s+/g, "")
            .split(key_name.id + "=")
            .pop()
            .substr(0, i)
        )/1000000;
        
        break;
        
      }
      if (i === 0){
        break;
        
      }
      i--;
    } while (
      true
    );
  }
}
document.getElementById("inputfile").addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    configuration = String(fr.result);
    convertGigabait(key_buffer_size);
    convertGigabait(query_cache_size);
    convertGigabait(innodb_buffer_pool_size);
    convertGigabait(innodb_log_buffer_size);
    convertGigabait(max_allowed_packet);
    convertGigabait(read_buffer_size);
    convertGigabait(read_rnd_buffer_size);
    convertGigabait(sort_buffer_size);
    convertGigabait(join_buffer_size);
    convertGigabait(binlog_cache_size);
    convertGigabait(thread_stack);
    convertGigabait(tmp_table_size);
    convertGigabait(net_buffer_length);
    convertKilobait(key_buffer_size);
    convertKilobait(query_cache_size);
    convertKilobait(innodb_buffer_pool_size);
    convertKilobait(innodb_log_buffer_size);
    convertKilobait(max_allowed_packet);
    convertKilobait(read_buffer_size);
    convertKilobait(read_rnd_buffer_size);
    convertKilobait(sort_buffer_size);
    convertKilobait(join_buffer_size);
    convertKilobait(binlog_cache_size);
    convertKilobait(thread_stack);
    convertKilobait(tmp_table_size);
    convertKilobait(net_buffer_length);
    convertBait(key_buffer_size , 30);
    convertBait(query_cache_size, 30);
    convertBait(innodb_buffer_pool_size , 30);
    convertBait(innodb_log_buffer_size , 30);
    convertBait(max_allowed_packet , 30);
    convertBait(read_buffer_size , 30);
    convertBait(read_rnd_buffer_size , 30);
    convertBait(sort_buffer_size , 30);
    convertBait(join_buffer_size , 30);
    convertBait(binlog_cache_size , 30);
    convertBait(thread_stack , 30);
    convertBait(tmp_table_size , 30);
    convertBait(net_buffer_length , 30);
    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("max_connections=")
          .pop()
          .substr(0, 5)
      )
    ) {
      max_connections.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("max_connections=")
          .pop()
          .substr(0, 5)
      );
    } else {
      if (
        Number(
          configuration
            .replace(/\s+/g, "")
            .split("max_connections=")
            .pop()
            .substr(0, 4)
        )
      ) {
        max_connections.value = Number(
          configuration
            .replace(/\s+/g, "")
            .split("max_connections=")
            .pop()
            .substr(0, 4)
        );
      } else {
        if (
          Number(
            configuration
              .replace(/\s+/g, "")
              .split("max_connections=")
              .pop()
              .substr(0, 3)
          )
        ) {
          max_connections.value = Number(
            configuration
              .replace(/\s+/g, "")
              .split("max_connections=")
              .pop()
              .substr(0, 3)
          );
        } else {
          if (
            Number(
              configuration
                .replace(/\s+/g, "")
                .split("max_connections=")
                .pop()
                .substr(0, 2)
            )
          ) {
            max_connections.value = Number(
              configuration
                .replace(/\s+/g, "")
                .split("max_connections=")
                .pop()
                .substr(0, 2)
            );
          } else {
            if (
              Number(
                configuration
                  .replace(/\s+/g, "")
                  .split("max_connections=")
                  .pop()
                  .substr(0, 1)
              )
            ) {
              max_connections.value = Number(
                configuration
                  .replace(/\s+/g, "")
                  .split("max_connections=")
                  .pop()
                  .substr(0, 1)
              );
            } else {
              if (
                Number(
                  configuration
                    .replace(/\s+/g, "")
                    .split("max_connections=")
                    .pop()
                    .substr(0)
                )
              ) {
                max_connections.value = Number(
                  configuration
                    .replace(/\s+/g, "")
                    .split("max_connections=")
                    .pop()
                    .substr(0)
                );
              }
            }
          }
        }
      }
    }
    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("key_buffer_size=")
          .pop()
          .split("M")[0]
      )
    ) {
      key_buffer_size.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("key_buffer_size=")
          .pop()
          .split("M")[0]
      );
    }
    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("query_cache_size=")
          .pop()
          .split("M")[0]
      )
    ) {
      query_cache_size.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("query_cache_size=")
          .pop()
          .split("M")[0]
      );
    }

    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("innodb_buffer_pool_size=")
          .pop()
          .split("M")[0]
      )
    ) {
      innodb_buffer_pool_size.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("innodb_buffer_pool_size=")
          .pop()
          .split("M")[0]
      );
    }

    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("innodb_log_buffer_size=")
          .pop()
          .split("M")[0]
      )
    ) {
      innodb_log_buffer_size.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("innodb_log_buffer_size=")
          .pop()
          .split("M")[0]
      );
    }
    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("max_allowed_packet=")
          .pop()
          .split("M")[0]
      )
    ) {
      max_allowed_packet.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("max_allowed_packet=")
          .pop()
          .split("M")[0]
      );
    }

    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("read_buffer_size=")
          .pop()
          .split("M")[0]
      )
    ) {
      read_buffer_size.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("read_buffer_size=")
          .pop()
          .split("M")[0]
      );
    }
    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("read_rnd_buffer_size=")
          .pop()
          .split("M")[0]
      )
    ) {
      read_rnd_buffer_size.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("read_rnd_buffer_size=")
          .pop()
          .split("M")[0]
      );
    }

    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("sort_buffer_size=")
          .pop()
          .split("M")[0]
      )
    ) {
      sort_buffer_size.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("sort_buffer_size=")
          .pop()
          .split("M")[0]
      );
    }

    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("join_buffer_size=")
          .pop()
          .split("M")[0]
      )
    ) {
      join_buffer_size.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("join_buffer_size=")
          .pop()
          .split("M")[0]
      );
    }

    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("binlog_cache_size=")
          .pop()
          .split("M")[0]
      )
    ) {
      binlog_cache_size.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("binlog_cache_size=")
          .pop()
          .split("M")[0]
      );
    }

    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("thread_stack=")
          .pop()
          .split("M")[0]
      )
    ) {
      thread_stack.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("thread_stack=")
          .pop()
          .split("M")[0]
      );
    }

    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("tmp_table_size=")
          .pop()
          .split("M")[0]
      )
    ) {
      tmp_table_size.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("tmp_table_size=")
          .pop()
          .split("M")[0]
      );
    }

    if (
      Number(
        configuration
          .replace(/\s+/g, "")
          .split("net_buffer_length=")
          .pop()
          .split("M")[0]
      )
    ) {
      net_buffer_length.value = Number(
        configuration
          .replace(/\s+/g, "")
          .split("net_buffer_length=")
          .pop()
          .split("M")[0]
      );
    }
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
