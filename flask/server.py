from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/play', methods=['POST'])
def play():
    data = request.json
    selected_option = data.get('option')
    
    # Capitalize the selected option
    capitalized_option = selected_option.capitalize()
    
    # Return the capitalized option as JSON
    return jsonify({'selected_option': capitalized_option})

if __name__ == '__main__':
    app.run(debug=True)
