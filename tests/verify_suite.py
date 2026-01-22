import subprocess
import sys

def run_test(script_name):
    print(f"--- Running {script_name} ---")
    try:
        result = subprocess.run([sys.executable, script_name], capture_output=True, text=True, timeout=30)
        print(result.stdout)
        if result.returncode != 0:
            print(f"ERROR: {script_name} failed with return code {result.returncode}")
            print(result.stderr)
            return False
        return True
    except subprocess.TimeoutExpired:
        print(f"ERROR: {script_name} timed out.")
        return False
    except Exception as e:
        print(f"ERROR: Could not run {script_name}: {e}")
        return False

def main():
    tests = [
        "tests/verify_accessibility.py",
        "tests/verify_history_trap.py",
        "tests/verify_focus.py",
        "tests/verify_ux_rapid_interaction.py",
        "tests/verify_acc_focus_trap.py",
        "tests/verify_logic_deep_link.py"
    ]

    failed = []
    for test in tests:
        if not run_test(test):
            failed.append(test)

    print("\n" + "="*30)
    if failed:
        print(f"FAILED: The following tests failed: {failed}")
        sys.exit(1)
    else:
        print("SUCCESS: All verification tests passed.")
        sys.exit(0)

if __name__ == "__main__":
    main()
