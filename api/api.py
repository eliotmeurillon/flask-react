import time
from datetime import datetime
from flask import Flask
import sys

app = Flask(__name__)


@app.route('/api/time')
def get_current_time():
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    print(current_time, file=sys.stderr)
    return {'time': current_time}


# @app.route('/api/time')
# def get_current_time():
#     print(type(time.time()), file=sys.stderr)
#     return {'time': time.time()}
