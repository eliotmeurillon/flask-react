from datetime import datetime
from flask import Flask

app = Flask(__name__)


@app.route('/api/time')
def get_current_time():
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    return {'time': current_time}
