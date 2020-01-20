import SQLite from 'react-native-sqlite-2';
import {AsyncStorage} from 'react-native';
import moment from 'moment';

export const db = SQLite.openDatabase('test.db', '1.0', 'Test Database', 1);

export const today = () => moment().format('YYYY-MM-DD');

export function createCheckup(t) {
  t.executeSql(
    'CREATE TABLE IF NOT EXISTS Checkups(id INTEGER PRIMARY KEY NOT NULL, date VARCHAR(30), type VARCHAR(10), score INTEGER)',
    [],
  );
}

export function insertCheckup(t, date, checkup, score) {
  t.executeSql('insert into Checkups (date, type, score) values (?, ?, ?)', [
    date,
    checkup,
    score,
  ]);
}

export function selectAllDepressionCheckup(t, cb) {
  t.executeSql(
    "SELECT * FROM Checkups where type = 'Depression'",
    [],
    (tx, res) => {
      var data = [];
      var labels = [];
      for (let i = 0; i < res.rows.length; ++i) {
        let it = res.rows.item(i);
        labels.push(it.date);
        data.push(it.score);
      }
      cb({labels, data});
    },
  );
}

export function selectAllAnxietyCheckup(t, cb) {
  t.executeSql(
    "SELECT * FROM Checkups where type = 'Anxiety'",
    [],
    (tx, res) => {
      var data = [];
      var labels = [];
      for (let i = 0; i < res.rows.length; ++i) {
        let it = res.rows.item(i);
        labels.push(it.date);
        data.push(it.score);
      }
      cb({labels, data});
    },
  );
}

export function selectAllCheckup(t, cb) {
  t.executeSql('SELECT * FROM Checkups', [], (tx, res) => {
    var data = [];
    var labels = [];
    for (let i = 0; i < res.rows.length; ++i) {
      let it = res.rows.item(i);
      labels.push(it.date);
      data.push(it.score);
    }
    cb({labels, data});
  });
}

export function dropCheckup(t) {
  t.executeSql('DROP TABLE IF EXISTS Checkups');
}

export function createDailyMoods(t) {
  t.executeSql(
    'CREATE TABLE IF NOT EXISTS DailyMoods(mood INTEGER NOT NULL, date TEXT NOT NULL, PRIMARY KEY (date))',
    [],
  );
}

export function saveDailyMoods(t, date, mood) {
  t.executeSql('INSERT INTO DailyMoods (mood, date) VALUES (?, ?)', [
    mood,
    date,
  ]);
}

export function updateDailyMoods(t, date, mood) {
  t.executeSql('UPDATE DailyMoods SET mood = ? WHERE date = ?', [mood, date]);
}

export function selectAllDailyMoods(t, cb) {
  t.executeSql('SELECT * FROM DailyMoods', [], (tx, res) => {
    var labels = [];
    var data = [];
    for (let i = 0; i < res.rows.length; ++i) {
      labels.push(res.rows.item(i).date);
      data.push(res.rows.item(i).mood);
    }
    cb({labels, data});
  });
}

export function addOrUpdateDailyMoods(t, date, mood) {
  t.executeSql('SELECT * FROM DailyMoods WHERE date = ?', [date], function(
    tx,
    res,
  ) {
    if (res.rows.length > 0) {
      updateDailyMoods(t, date, mood);
    } else {
      saveDailyMoods(t, date, mood);
    }
  });
}

export function dropDailyMoods(t) {
  t.executeSql('DROP TABLE IF EXISTS DailyMoods');
}

export function dropEntries(t) {
  t.executeSql('DROP TABLE IF EXISTS Entries');
}

export function selectAllEntries(t, cb) {
  t.executeSql('SELECT * FROM Entries', [], (tx, res) => {
    var temp = [];
    for (let i = 0; i < res.rows.length; ++i) {
      temp.push(res.rows.item(i));
    }
    cb({temp});
  });
}

export function removeEntry(t, id) {
  t.executeSql('DELETE FROM Entries WHERE entry_id = ?', [id]);
}

export function createEntries(t) {
  t.executeSql(
    'CREATE TABLE IF NOT EXISTS Entries(entry_id INTEGER PRIMARY KEY NOT NULL, title VARCHAR(40), date_added TEXT, user_comment TEXT, emotions TEXT)',
    [],
  );
}

export function insertEntries(t, title, date, userComment, emotions) {
  t.executeSql(
    'INSERT INTO Entries(title, date_added, user_comment, emotions) VALUES (?, ?, ?, ?)',
    [title, date, userComment, emotions.toString()],
  );
}

export function updateEntries(t, id, title, comment) {
  t.executeSql(
    'UPDATE Entries SET title = ?, user_comment = ? WHERE entry_id = ?',
    [title, comment, id],
  );
}

export function dropAll(t) {
  AsyncStorage.clear();
  dropCheckup(t);
  dropDailyMoods(t);
  dropEntries(t);
  createCheckup(t);
  createDailyMoods(t);
  createEntries(t);
}

export function scenarioOne(t) {
  dropAll(t);
  insertCheckup(t, '2019-11-09', 'Anxiety', 7);
  insertCheckup(t, '2019-12-01', 'Anxiety', 10);
  insertCheckup(t, '2019-11-09', 'Depression', 8);
  insertCheckup(t, '2019-12-01', 'Depression', 11);
}

export function scenarioTwo(t) {
  dropAll(t);
  insertCheckup(t, '2019-11-15', 'Anxiety', 6);
  insertCheckup(t, '2019-12-02', 'Anxiety', 13);
  insertCheckup(t, '2019-11-15', 'Depression', 5);
  insertCheckup(t, '2019-12-02', 'Depression', 14);
}
